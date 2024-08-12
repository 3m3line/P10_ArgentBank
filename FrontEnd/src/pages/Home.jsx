import Banner from "../components/Banner";
import Feature from "../components/Feature";

const Home = () => {
    return(
        <main>
        <Banner 
          title="Promoted Content"
          subtitles={["No fees.", "No minimum deposit.", "High interest rates."]}
          text="Open a savings account with Argent Bank today!" 
          imageSrc="../../src/assets/images/bank-tree.webp"
        />
        <section className="features">
          <h2 className="sr-only">Features</h2>
          <Feature
            icon="../../src/assets/images/icon-chat.webp"
            title="You are our #1 priority"
          >
            Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes.
          </Feature>
          <Feature
            icon="../../src/assets/images/icon-money.webp"
            title="More savings means higher rates"
          >
            The more you save with us, the higher your interest rate will be!
          </Feature>
          <Feature
            icon="../../src/assets/images/icon-security.webp"
            title="Security you can trust"
          >
            We use top of the line encryption to make sure your data and money
            is always safe.
          </Feature>
        </section>
      </main>
    );
};

export default Home;
