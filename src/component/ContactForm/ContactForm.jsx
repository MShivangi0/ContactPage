import Button from '../Button/Button';
import styles from './Contact.module.css'
import { MdMessage } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import {HiMail} from 'react-icons/Hi';
const ContactForm =()=> {
    return (
        <section className={styles.container}>
        <div className={styles.contact_form}>
        <div className={styles.top_btn}>
        <Button  
        text="VIA SUPPORT CHAT" icons={<MdMessage fontSize="24px"/>} />
            <Button  text="VIA CALL" icons={<FaPhoneAlt fontSize="24px"/>} />

        </div>
       <Button
       isOutline={true}
       text="VIA EMAIL FORM" icons={<HiMail fontSize="24px"/>} />    
        
        <form>
        <div className={styles.form_control}>

        <label htmlFor='name'>Name</label>
            <input type="text" name="name" />
</div>
<div className={styles.form_control}>

<label htmlFor='email'>E-Mail</label>
    <input type="text" name="email" />
</div>
<div className={styles.form_control}>

<label htmlFor='text'>Text</label>
    <textarea type="text" rows={15} />
</div>
<div style={{display : "flex", justifyContent:"end"}}> <Button text="Submit" /></div>
 
        </form>
        </div>
        <div className={styles.contact_image}>
            <img src='/images/Service 24_7-pana 1.png' alt='contact image' />
        </div>
        </section>

    );
};
export default ContactForm