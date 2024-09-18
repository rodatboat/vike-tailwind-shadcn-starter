export default function InputErrorLabel({ condition, children }) {
    return <p className={`${!condition && "hidden"} text-destructive text-xs font-semibold mt-1`}>{children}</p>
}