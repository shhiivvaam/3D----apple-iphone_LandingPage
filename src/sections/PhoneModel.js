import React from 'react'
import styled from 'styled-components';

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";

import { Model } from "../assets/3D-Model/Scene"



const Container = styled.div`
    width: 100vw;
    height: 100vh;

    position: fixed;
    top: 0;
    z-index: 1;
    background-color: transparent; 
`

const PhoneModel = () => {
    return (
        <Container>
            {/* 3D Modeeling of iphone */}
            <Canvas camera={{fov: 14}}>
                <ambientLight intensity={1.25}/>
                <directionalLight position={0.4}/>
                        {/* We can also pass an arry of directional lights i.e, [1,0,0], etc */}

                <mesh>
                    {/* Basic Class that represents adding Polygon Models  */}
                    <boxGeometry />
                    <meshStandardMaterial color="red"/>
                </mesh>

                <Model/>
                <Environment preset='sunset'/>
                <OrbitControls/>
            </Canvas>
        </Container>
    )
}

export