import express from 'express'

const neo4j = require('neo4j-driver')

const app = express()
const port = 3030

let boltDriver: any

function useNeo4j(req: any, res: any, next: () => void) {
    boltDriver = neo4j.driver(
        'neo4j://localhost',
        neo4j.auth.basic('neo4j', process.env['NEO4J_PASSWORD'])
    )

    next()
}

app.use(useNeo4j)

app.get('/', async (req, res) => {

    const session = boltDriver.session()

    try {

        const remoteAddress = req.headers['x-remote-address']
        const createVisit = `CREATE (visit:PageLoad {ip: '${remoteAddress}', time: '${new Date().getTime()}'})`
        await session.run(createVisit)

        const visitCountQuery = `MATCH (p:PageLoad) RETURN COUNT(p) as count`
        const countResult = await session.run(visitCountQuery)
        const visitCount = countResult.records[0].get('count').toNumber()
        
        res.send({ count: visitCount })

    } catch (e) {
        res.status(500).send(e)
    } finally {
        session.close()
    }
    
})

app.listen(port, () => {
    console.log(`App listening at https://plausiblereality.com`)
})

process.on('SIGTERM', () => {
    
    boltDriver.close()
    
})