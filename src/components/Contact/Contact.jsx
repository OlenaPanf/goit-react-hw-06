import css from './Contact.module.css'
import { HiPhone } from "react-icons/hi";
import { HiUser } from "react-icons/hi";

export default function Contact({ data: { id, name, number }, onDelete }) {
    
    return (
        <div className={css.container}>
            <div>
                <div className={css.box}>
                <HiUser />
            <p>{name}</p>
            </div>
            <div className={css.box}>
                <HiPhone />
                <p>{number}</p>
            </div>
            </div>            
            <button className={css.button} onClick={() => onDelete(id)}>
                Delete</button>
        </div>
    );
}
