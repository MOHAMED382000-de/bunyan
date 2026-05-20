
import style from "./CardStatus.module.css"
export default function CardStatus( { counter, title , icon} ) {
  return <>
     
     <div className={`${style.statusCard} d-flex align-items-center justify-content-center`}>
        {/* Icon parent */}
        <div className={`${style.icon} d-flex align-items-center justify-content-center w-100`}>
          <i className={`${icon}`}></i>
        </div>
        {/* info */}
        <div className={`${style.info} d-flex flex-column align-items-center justify-content-center`}>
            <span className={style.counter}>{counter}</span>
            <span className={style.title}>{title}</span>
        </div>
     </div>
  
  </>

}
  
  
  
