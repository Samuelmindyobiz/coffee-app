import React from 'react'
import BannerImg from '../../assets/coffee-white.png'
import BgTexture from '../../assets/coffee-texture.jpg'

const bgImage = {
    backgroundImage: `url(${BgTexture})`,
    backgroundColor: "#270c03",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",

}

const Banner = () => {
    return (
        <>
            <div style={bgImage}>
                <div className="container min-h-[550px] flex justify-center items-center">
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                        {/* Image Section */}
                        <div>
                            <img src={BannerImg} alt="" className='' />
                        </div>
                        {/* Text Content Section */}
                        <div></div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner