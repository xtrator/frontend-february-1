export default function User({ user }) {
  return (
    <>
      <h1>Username:</h1>
      <p>name: {user.name}</p>
      <p>age: {user.age}</p>
    </>
  );
}
