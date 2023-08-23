'use clinet'
import { getProviders, signIn } from "next-auth/react";
import React,{ useState, useEffect } from "react";
import { Key } from "readline";

type Provider = {
  id: string,
  name: string,
  type: string,
  signInUrl: string,
  callBackUrl: string,
  singinUrlParams?:Record<string, string> | null, 
}

type Providers = Record<string, Provider>;


const AuthProviders = () => {
  const [providers, setProviders] = useState<Providers  | null>(null);

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    }

    fetchProviders();
  }, []);


  if (providers) {
    return (
      <div>
        {Object.values(providers).map((provider: Provider, i) => (
          <button key={i}>{provider.id}</button>
        ))}
      </div>
    )
  }
}

export default AuthProviders