import { Hono } from 'hono'
import noteRouter from '../routes/noters';
import { cors } from 'hono/cors';
const app = new Hono<{
	Bindings: {
		DATABASE_URL: string
	}
}>();
app.use(cors());

app.route('/api/v1/notes', noteRouter)
export default app
