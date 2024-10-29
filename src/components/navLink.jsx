import '../index.css'
export default function NavLink({ link = "No link" }) {
    return (
        <h3 className = "inline-block mx-1 px-4 py-4 text-xl text-white hover:text-red-500">{link}</h3>
    );
}
