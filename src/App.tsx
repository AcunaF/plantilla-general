import './App.css'
import {PageRoutes} from "./routes/PageRoutes.tsx";
//import {Footer} from "./components/footer/Footer.tsx";
//import {ChatBot} from "./components/ChatBot/ChatBot.tsx";
import {QueryClient, QueryClientProvider} from 'react-query'

const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="main-container">
                <PageRoutes/>
            </div>
        </QueryClientProvider>
    )
}

export default App

