import React, { useEffect, useRef } from 'react';

const Threeplane = ({data}) => {
    const ref = useRef()
    useEffect(() => {
        let { array } = ref.current.geometry.attributes.position;
        for (let i = 0; i < array.length; i += 3) {
            array[i+2] = (array[i+2] + Math.random())
          }
    }, []);

    useEffect(()=>{ 
        ref.current.rotation.y = -data.parameters.y + 0.1;
        ref.current.rotation.x = -data.parameters.x + 0.1;
        console.log(ref.current.rotation.x)
    },[data])

    return (
    <mesh
        position={[0,-1,0]}
        ref={ref}>
        <planeGeometry args={[15,15,10,10]} />
        <meshStandardMaterial color='#000' flatShading={true} wireframe={false}/>
    </mesh>
    );
}

export default Threeplane;
