
    



        <div className={show ? "show visible" : "show"}>
            <iframe width="1360" height="570" src={showVideo} frameborder="0" allow='autoplay;' allowFullScreen></iframe>
            <i class="fa-solid fa-circle-xmark" onClick={()=> setshow(false)}></i>
        </div>

            {Video.map((item, index) => {
                return (
                    <div className='containerV' key={index} onClick={()=> getVideo(item.VSrc)}>
                        <video src={item.VSrc} className='video'/>
                    </div>
                )
            })}

            <iframe width="1360" height="570" src="https://www.youtube.com/embed/wfn22K51LNM" title="practica 5" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>;

            <iframe width="1360" height="570" src="https://www.youtube.com/embed/DLC1K-9utsc" title="practica 3" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>;

            <iframe width="1360" height="570" src="https://www.youtube.com/embed/0duA4dvVJCw" title="Practica 2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>;

            <iframe width="1360" height="570" src="https://www.youtube.com/embed/FUhyawslSLE" title="Parcial 1 Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>;

            <iframe width="1360" height="570" src="https://www.youtube.com/embed/6KY73ontL6M" title="Spot 3 Parcial DGDV" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>;

            <iframe width="1360" height="570" src="https://www.youtube.com/embed/To9Cp-ggu4E" title="Spot Parcial 1 Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>