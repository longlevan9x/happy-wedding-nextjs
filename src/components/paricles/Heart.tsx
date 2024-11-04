import {useEffect, useState} from "react";
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {loadSlim} from "@tsparticles/slim";

const ParticleHeart = () => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [init, setInit] = useState(false);
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded: any = (container: any) => {
        console.log(container);
    };

    return (
        <Particles
            id="tsparticles"
            className="z-[1000] relative"
            particlesLoaded={particlesLoaded}
            options={{
                fpsLimit: 120,
                particles: {
                    number: {
                        value: 8,
                        density: {
                            enable: false,
                            width: 1000,
                            height: 1000
                        }
                    },
                    color: {value: "#ffffff"},
                    shape: {
                        // fill: false,
                        // close: false,
                        type: "image",
                        options: {
                            image: {src: "icons/love.png", width: 100, height: 100},
                            stroke: {width: 0, color: "#000000"},
                            polygon: {nb_sides: 5},
                        }
                    },
                    opacity: {
                        value: {
                            max: 1,
                            min: 0.5
                        },
                        animation: {enable: false, speed: 1, mode: "auto", sync: false}
                    },
                    size: {
                        value: {
                            max: 20,
                            min: 5
                        },
                        animation: {
                            destroy: "none",
                            mode: "random",
                            enable: true,
                            speed: 50,
                            sync: false,
                            // count: 10,
                            // decay: 10,
                            // delay: 10,
                            startValue: 'random'
                        },
                    },
                    links: {
                        color: "#000000",
                        distance: 150,
                        enable: false,
                        opacity: 15,
                        width: 2,
                    },
                    move: {
                        enable: true,
                        speed: 6,
                        direction: "bottom",
                        // size: true,
                        random: true,
                        straight: false,
                        outModes: {
                            default: "out",
                        },
                        attract: {enable: false, rotate: {x: 600, y: 1200}}
                    }
                },
                interactivity: {
                    //     detect_on: "canvas",
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            // mode: ["grab", "bubble", 'repulse'],
                            mode: 'repulse',
                        },
                        resize: {enable: true},
                    },
                    modes: {
                        push: {
                            quantity: 2,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                        grab: {
                            distance: 400,
                            links: {
                                opacity: 1
                            }
                        },
                        bubble: {
                            distance: 400,
                            size: 40,
                            duration: 2,
                            opacity: 8,
                            speed: 3
                        },
                        remove: {
                            particles_nb: 2
                        }
                    },
                },
                detectRetina: true
            }}
        />
    );
};

export default ParticleHeart;