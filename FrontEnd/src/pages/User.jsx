import AccountCard from '../components/AccountCard';
import Button from '../components/Button';

function User() {
  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />Tony Jarvis!</h1>
        <Button text="Edit Name" className="edit-button" />
      </div>
      <h2 className="sr-only">Accounts</h2>
      <AccountCard
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        description="Available Balance"
        buttonText="View transactions"
      />
      <AccountCard
        title="Argent Bank Savings (x6712)"
        amount="$10,928.42"
        description="Available Balance"
        buttonText="View transactions"
      />
      <AccountCard
        title="Argent Bank Credit Card (x8349)"
        amount="$184.30"
        description="Current Balance"
        buttonText="View transactions"
      />
    </main>
  );
}

export default User;