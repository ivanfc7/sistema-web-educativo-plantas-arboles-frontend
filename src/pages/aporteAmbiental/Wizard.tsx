import { useState } from "react";
import { Step1Especie } from "./pasos/Step1Especie";
import { Step2Cantidad } from "./pasos/Step2Cantidad";
import { Step3EspesuraAltura } from "./pasos/Step3EspesuraAltura";
import { Step4Resultado } from "./pasos/Step4Resultado";

export function Wizard() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<any>({});

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const updateFormData = (data: any) => {
    setFormData((prev: any) => ({ ...prev, ...data }));
  };

  return (
    <div className="p-4 max-w-4xl w-full mx-auto">
      {step === 1 && <Step1Especie siguiente={nextStep} datos={updateFormData}/>}
      {step === 2 && <Step2Cantidad siguiente={nextStep} atras={prevStep} datos={updateFormData} datoActual={formData} />}
      {step === 3 && <Step3EspesuraAltura siguiente={nextStep} atras={prevStep} datos={updateFormData} datoActual={formData}/>}
      {step === 4 && <Step4Resultado datos={formData}/>}
    </div>
  );
}
