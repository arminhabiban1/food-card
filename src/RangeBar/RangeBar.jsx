import { useState } from "react"
import { Range } from "react-range";


const RangeBar = ({user}) => {
    const[values,setvalues]=useState([0])
    const stepDifference=25;
    const marks=Array.from(Array(10)).map(( _,index)=>({
        value :index * stepDifference,
        label :(index * stepDifference).toString()
    }));
  return (
    <div className="w-full">
        <div  >
            <p>{user.name}</p>
            <p>${(values[0])}</p>
            <Range step={stepDifference}
            min={0}
            max={150}
            values={values}
            onChange={(newValues)=>setvalues(newValues)}
            renderTrack={({props,children})=>(
                <div
                    {...props}
                    style={{
                        ...props.style,
                        height:'4px',
                        width:'100%',
                        background:'#d9d9d9',
                        borderRadius: '10px'
                    }}
                    >
                    {children}
                </div>
            )}
            renderThumb={({props})=>(
            <div
            {...props}
            style={{
                ...props.style,
                height:'15px',
                width:'15px',
                backgroundcolor:'#1d4277',
                border:'5px solid #f1506c',
                borderRadius: '50%',
                padding:'4px',
            }}
            >
               
        </div>
    ) }
    renderMark={({props,index})=>(
    <div
    {...props}
    style={{
        ...props.style,
        height:'25px',
        width:'3px',
        backgroundcolor:'#d9d9d9',
        borderRadius: '15px',
        position :'absolute',
        top:'50'
    }}
    >
    {index% 10 === 0 && <span></span>}
    
</div>
) }



            />
        </div>
        </div>
  )
}

export default RangeBar