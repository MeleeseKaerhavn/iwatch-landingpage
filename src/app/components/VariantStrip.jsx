const VariantStrip = () => {
    return ( 
    <div className="variant_flex">
        <div className="variant">
        <img src="./iwatch.svg" alt="" className="preview"/>
         <span className="pill navy" />
        </div>
        <div className="variant">
        <img src="./mint.svg" alt="" className="preview"/>
         <span className="pill mint" />
        </div>
        <div className="variant">
        <img src="./ocean.svg" alt="" className="preview"/>
         <span className="pill ocean" />
        </div>
    </div>

     );
}
 
export default VariantStrip;