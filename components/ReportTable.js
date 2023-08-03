export default function ReportTable(props) {
    if (props.loading) return <p>Loading ...</p>
    if (props.locations.length == 0) {
        return (
            <h2 className="w-1/2 mx-auto my-8 text-2xl text-center">No Cookie Stands Available </h2>
        )
    }
    else {
        return (
            <table className="w-1/2 mx-auto my-8 text-2xl text-center bg-lime-800">
                <thead>
                    <tr>
                        <th className="border border-black">location <span onClick={() => props.onDelete(item.id)}>[X]</span></th>
                        {props.hours.map(item => (
                            <th className="border border-black">{item}</th>
                        ))}
                        <th className="border border-black">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {props.locations.map((item1, index) => (
                        <tr>
                            <td className="border border-black">{item1.location}</td>
                            {props.ararys[index].map(item2 => (
                                <td className="border border-black">{item2}</td>
                            ))}

                            <td className="border border-black">{props.summation[index]}</td>
                        </tr>
                    ))}


                    <tr>
                            <td className="border border-black">Totals</td>
                            <td className="border border-black">{props.totalSummation}</td>
                            <td className="border border-black">{props.totalSummation}</td>
                            <td className="border border-black">{props.totalSummation}</td>
                            <td className="border border-black">{props.totalSummation}</td>
                            <td className="border border-black">{props.totalSummation}</td>
                            <td className="border border-black">{props.totalSummation}</td>
                            <td className="border border-black">{props.totalSummation}</td>
                            <td className="border border-black">{props.totalSummation}</td>
                            <td className="border border-black">{props.totalSummation}</td>
                            <td className="border border-black">{props.totalSummation}</td>
                            <td className="border border-black">{props.totalSummation}</td>
                            <td className="border border-black">{props.totalSummation}</td>
                            <td className="border border-black">{props.totalSummation}</td>
                            <td className="border border-black">{props.totalSummation}</td>
                            
                            <td className="border border-black">{props.totalSummation}</td>
                    </tr>


                </tbody>
            </table>
        )
    }
}