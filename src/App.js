import React, {useEffect} from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import TodoList from "./Todo/TodoList";
import Context from "./context";
import Loader from "./Loader";
import Modal from "./Modal/Modal";

const AddTodo = React.lazy(() => import('./Todo/AddTodo'))

function App() {

    const [mapConfig, setMapConfig] = React.useState({
        center: [51.097679, 71.430936],
        zoom: 13,
        scrollWheelZoom: true
    })

    /*const [todos, setTodos] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => response.json())
            .then(todos => {
                setTimeout(() => {
                    setTodos(todos)
                    setLoading(false)
                }, 2000)
            })
    }, [])

    function toggleTodo(id) {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        }))
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function addTodo(title) {
        setTodos(todos.concat([{
            title,
            id: Date.now(),
            completed: false
        }]))
    }*/

    /*return (
        <Context.Provider value={{removeTodo}}>
            <div className="wrapper">
                <h1>React tutorial</h1>
                <Modal/>

                <React.Suspense fallback={<p>Loading...</p>}>
                    <AddTodo onCreate={addTodo}/>
                </React.Suspense>

                {loading && <Loader/>}
                {todos.length ?
                    (<TodoList todos={todos} onToggle={toggleTodo} />) :
                    (loading ? null : <p>No todos</p>)
                }

            </div>
        </Context.Provider>
    )*/

    const styles = {
        mapContainer: {
            height: "100vh"
        }
    }

    return (
        <MapContainer style={styles.mapContainer} center={mapConfig.center} zoom={mapConfig.zoom} scrollWheelZoom={mapConfig.scrollWheelZoom}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.090758, 71.418240]}>
                <Popup>
                    That's our SHARAGA. <br /> Simply AITU.
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default App;
