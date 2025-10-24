import { Input } from '../../components/global/input-field';
import { Button } from '../../components/global/button';

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-black text-2xl font-bold mb-6 text-center">Sign In</h1>
        <div className="space-y-4">
          <Input label="Email" placeholder="Enter your email" />
          <Input label="Password" type="password" placeholder="Enter your password" />
          <Button variant="primary" className=" text-black w-full">
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
}