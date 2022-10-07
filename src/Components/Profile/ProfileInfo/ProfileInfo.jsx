import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return <div className={s.content}>
        <div>
            <img
                src='https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300'/>
        </div>

        <div className={s.description}>
            avatar and description
            <img
                src='https://cccstore.ru/upload/resize_cache/iblock/60a/679_666_140cd750bba9870f18aada2478b24840a/gv3izo97ff1brn5wx26y9m0fi7oh7ct4.webp?fv=00008'/>
        </div>


    </div>
}
export default ProfileInfo;