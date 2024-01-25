import { useSpring, animated } from '@react-spring/web'

export default function Animacao() {
    const [springs, api] = useSpring(() => ({
        from: { x: 0 },
       // to: { x: 100 },
    }))

    function aoClicar() {
        api.start({
            from: {
              x: 0,
            },
            to: {
              x: 100,
            },
          })
    }

    return (
        <animated.div
            style={{
                width: '80px',
                height: '80px',
                background: '#ff6d6d',
                borderRadius: '16px',
                ...springs
            }}
            onClick={aoClicar}
        />
    )
}
