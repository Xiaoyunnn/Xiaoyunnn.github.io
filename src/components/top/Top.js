import Image from "next/image";

const Top = () => {
    return (
        <div>
            <div className="relative">
                <div className="w-screen relative banner-height">
                    <Image
                        alt='Hi'
                        src='/bg2.jpg'
                        fill={true}
                        style={{
                            objectFit: 'cover',
                            objectPosition: 'bottom'
                        }}
                    />
                </div>
                <h1 className="heading-hi">Hi</h1>
                <h2 className="heading-name">I&rsquo;m Xiao Yun</h2>
            </div>

        </div>
    )
}
export default Top;