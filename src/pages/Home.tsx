import { Globe, Phone, Workflow } from "lucide-react";
import Button from "../components/ui/Button";
import { useState } from "react";

const Home = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div>
      Welcome to second brains app
      <Button
        text="Welcome"
        startIcon={<Workflow size={20} />}
        size="md"
        loading={false}
      />
      <Button
        variant="secondary"
        startIcon={<Phone />}
        endIcon={<Globe />}
        size="md"
        loading={loading}
        onClick={() => setLoading((prev) => !prev)}
      > 
        Hello
      </Button>
    </div>
  );
};

export default Home;
