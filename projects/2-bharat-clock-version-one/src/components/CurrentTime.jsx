const CurrentTime = () => {
  const time = new Date();
  return (
    <p>
      This is the current: {time.toLocaleDateString()}-
      {time.toLocaleTimeString()}
    </p>
  );
};

export default CurrentTime;
