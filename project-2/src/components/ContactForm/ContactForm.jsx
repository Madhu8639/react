import Button from "../Button/Button.jsx"
import styles from "./ContactForm.module.css"
import {MdMessage} from "react-icons/md"
import {FaPhoneAlt} from "react-icons/fa"
import {HiMail} from "react-icons/hi"
const ContactForm = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
      <div className={styles.top_btn}>
      <Button text = "VIA SUPPORT CHART" icon={<MdMessage fontSize="24px"/>} /> 
    <Button text = "VIA CALL" icon={<FaPhoneAlt fontSize="24px"/>}/>
    </div>
    <div className="bottom_btn">
    <Button text = "VIA EMAIL FROM" icon={<HiMail fontSize="24px"/>} iswhite = {true} />
    </div>
    <form >
    <div className={styles.form_control}>
    <label htmlFor="name">Name</label>
    <input type="text" name="name" />
    </div>
    <div className={styles.form_control}>
    <label htmlFor="Email">Email</label>
    <input type="email" name="Email" />
    </div>
    <div className={styles.form_control}>
    <label htmlFor="text">Text</label>
    <textarea name="text" rows="8" />
    </div>
    </form>
    <div style={{display:"flex",justifyContent:"end"}}>
    <Button text = "SUBMIT" />
    </div>
      </div>
      <div className={styles.contact_image}>
    <img src="./././public/images-2/side.png" alt="" />
      </div>
    </section>

  )
}

export default ContactForm