import React from 'react'
import './typing.css'

function Typing() {
    return (
        <>
            <div className='textclass'>
                <p>asdfjkl; ;lkjfdsa fdsajkl; asdfjkl; asdfjkl; asdfjkl; asdfjkl; asdfjk;l asdf jk;lasdfjkl; fdldska;fjfkdls;alskdfj aaassssddddffffjjjkklll;;;;lkj jkl;as asdfjkl; asdfjkl; asdfjkl; asdfjkl; asdfjk;l asdf jk;lasdfjkl;</p>
            </div>
            <div className='inputclass'>
                <input type='text' placeholder='Enter text written above' />
            </div>
            <div>
                <h3>Wpm: </h3>
                <h3>Accuracy: </h3>
                <h3>Average: </h3>
            </div>
        </>
    )
}

export default Typing