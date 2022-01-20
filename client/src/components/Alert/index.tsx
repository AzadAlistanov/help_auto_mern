
type Props = {
  message: string
}

const Alert = ({ message }: Props) => (
  <>
    <div className="alert alert-success text-center" role="alert">
      {message}
    </div>
  </>
);

export default Alert;
