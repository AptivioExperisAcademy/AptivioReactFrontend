import Processes
 from "../components/Dashboard/Processes";

 const process = {
    companyName: "Oslo Kommune",
}
const Process = () => {
    return (
        <>
            <h1>Prosess</h1>
            <Processes process={process} />
        </>
    )
}

export default Process;