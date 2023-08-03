function CreateForm(props) {
    return (
        <form onSubmit={props.handler} className="w-1/2 p-2 mx-auto my-4 bg-lime-500">
            <h1 className="text-center mb-4 font-bold">Create Cookie Stand</h1>

            <div className="flex mb-4">
                <label className="flex-auto pl-1">Location</label>
                <input name="location" className="flex-auto pl-1" />
            </div>

            <div className="flex mb-4">
                <label className="flex-auto pl-1">Minimum Customers per hour</label>
                <input name="minimum" className="flex-auto pl-1" />
            </div>

            <div className="flex mb-4">
                <label className="flex-auto pl-1">Maximum Customers per hour</label>
                <input name="maximum" className="flex-auto pl-1" />
            </div>

            <div className="flex mb-4">
                <label className="flex-auto pl-1">Average Customers per hour</label>
                <input name="average" className="flex-auto pl-1" />
            </div>

            <div className="flex mb-4">
                <button className="flex-auto px-2 py-1 bg-lime-900 text-gray-50">Create</button>
            </div>
        </form>
    )
}

export default CreateForm