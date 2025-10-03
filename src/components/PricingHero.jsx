import "./PricingHero.css"

export function PricingHero(){
    let plans = [
        {
      name: "Starter",
      price: "9.99",
      features: [
        "2 GB of space",
        "14 days of backups",
        "Social integrations",
        "Client billing",
        "Remote access",
        "Custom domain",
        "24 hours support",
        "Admin tools",
        "Collaboration tools",
        "User management"
      ],
      primary: false
    },
    {
      name: "Professional",
      price: "19.99",
      features: [
        "2 GB of space",
        "14 days of backups",
        "Social integrations",
        "Client billing",
        "Remote access",
        "Custom domain",
        "24 hours support",
        "Admin tools",
        "Collaboration tools",
        "User management"
      ],
      primary: true
    },
    {
      name: "Team",
      price: "49.99",
      features: [
        "2 GB of space",
        "14 days of backups",
        "Social integrations",
        "Client billing",
        "Remote access",
        "Custom domain",
        "24 hours support",
        "Admin tools",
        "Collaboration tools",
        "User management"
      ],
      primary: false
    }
    ];

    return(
        <div className="pricing-hero">
            <h2>Plans & Pricing</h2>
            <p>Startup Framework is free forever — you only pay for custom domain hosting or to export your site.</p>
            <div className="pricing-cards">
                {plans.map((plan)=>(
                <div className={`pricing-card ${plan.primary ? 'primary': ''}`} key={plan.name}>
                <h3>{plan.name}</h3>
                <p className="price">${plan.price}</p>
                <ul>
                    {plan.features.map((feature,i)=>(
                        <li key={i}>{feature}</li>

                ))}
                </ul>
                <button className={plan.primary ? 'primary-btn' : ''}>Get Started</button>
                
                </div>
            )
            )}
            </div>
        </div>
    )
}