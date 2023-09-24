
export default function MyH1({text,style}) {

    return (
        <div>
            <h1 className={`text-2xl fonst-bold border-y-2 border-red-500/60 py-1 px-2 rounded-lg ${style}`}>{text}</h1>
        </div>
    )
}