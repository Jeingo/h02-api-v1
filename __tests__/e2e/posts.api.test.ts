import request from 'supertest'
import {app} from '../../src'
import {HTTP_STATUSES} from '../../src/constats/status'


describe('/posts', () => {
    beforeAll(async () => {
        await request(app).delete('/testing/all-data')
    })
    it('should return 200 and empty array', async () => {
        await request(app)
            .get('/posts')
            .expect(HTTP_STATUSES.OK_200, [])
    })
})