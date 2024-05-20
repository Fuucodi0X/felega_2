export default function Quest({img, title}){
    return (
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img}></img></figure>
            <div className="card-body">
            <div className="card-title">
                {title}
            </div>
            </div>
          </div>
    )
}