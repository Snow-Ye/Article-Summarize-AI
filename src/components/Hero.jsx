import { logo } from '../assets';


const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt='lt = "sumz_logo' className="w-16 object-contain" />
        <button
          type="button"
          onClick = {() => {window.open("https://github.com/Snow-Ye/Article-Summarize-AI")}}
          className = "orange_btn"
        >
          GitHub
        </button>

      </nav>
      <h1 className = "head_text">
        <span className = "blue_gradient">Summarize Articles</span> <br className = "max-md:hidden"/>
        <span className = "pink_gradient">with</span> <br className = "max-md:hidden"/>
        <span className = "orange_gradient">GPT-4</span>

      </h1>
      <h2 className = "purple_gradient">
          Simplify your reading by transforming lengthy articles into clear and concise summaries
      </h2>





    </header>
  )
}

export default Hero
