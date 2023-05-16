const styles = {
  color: '#3f58',
}

interface ButtonProps {
  title: string
}

export function Button(props: ButtonProps) {
  return (
    <p style={styles}>
      {props.title}
    </p>
  )
}