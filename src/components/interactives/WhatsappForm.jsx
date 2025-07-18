/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import WhatsAppIcon from "../../assets/importAssets/WhatsAppIcon.webp";
import { IdCard } from "lucide-react";
import { MapPin } from "lucide-react";
import { BriefcaseBusiness } from "lucide-react";
import { Mail } from "lucide-react";
import { Building } from "lucide-react";
import { UserCheck } from "lucide-react";
import { Phone } from "lucide-react";
import { FolderPen } from "lucide-react";
import { CiCreditCard1 } from "react-icons/ci";
import content from "../../content/content";
import contentCursos from "../../content/contentCursos";

import emailjs from "@emailjs/browser";

const WhatsappForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [position, setPosition] = useState("");
  const [institution, setInstitution] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const capitalizeFirstLetter = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const handleNameChange = (e) => {
    const input = e.target.value;
    const onlyLetters = input.replace(/[^a-zA-ZÀ-ÿ\s]/g, ""); // Permite apenas letras e espaços
    setName(capitalizeFirstLetter(onlyLetters));
  };

  const handlePositionChange = (e) => {
    const input = e.target.value;
    const onlyLetters = input.replace(/[^a-zA-ZÀ-ÿ\s]/g, ""); // Permite apenas letras e espaços
    setPosition(capitalizeFirstLetter(onlyLetters));
  };

  const handleInstitutionChange = (e) => {
    const input = e.target.value;
    const onlyLetters = input.replace(/[^a-zA-ZÀ-ÿ\s]/g, ""); // Permite apenas letras e espaços
    setInstitution(capitalizeFirstLetter(onlyLetters));
  };

  const handleEnderecoChange = (e) => {
    const input = e.target.value;
    const onlyLetters = input.replace(/[^a-zA-ZÀ-ÿ\s]/g, ""); // Permite apenas letras e espaços
    setEndereco(capitalizeFirstLetter(onlyLetters));
  };

  const handlePhoneChange = (e) => {
    const input = e.target.value.replace(/[^\d]/g, ""); // Remove tudo que não for número
    setPhone(formatPhoneNumber(input));
  };

  const handleCnpjChange = (e) => {
    const input = e.target.value.replace(/[^\d]/g, ""); // Remove tudo que não for número
    const limitedInput = input.slice(0, 14);
    setCnpj(formatCnpj(limitedInput));
  };

  const handleSubmitCnpj = (e) => {
    e.preventDefault();

    const errors = {};

    // Validação do CNPJ
    if (!cnpj) {
      errors.cnpj = "O campo CNPJ é obrigatório.";
    } else if (!validateCnpj(cnpj.replace(/\D/g, ""))) {
      errors.cnpj = "O CNPJ deve conter exatamente 14 números e ser válido.";
    }

    // Validações dos outros campos (CPF, nome, etc.)
    if (!cpf) {
      errors.cpf = "O campo CPF é obrigatório.";
    } else if (!validateCpf(cpf.replace(/\D/g, ""))) {
      errors.cpf = "O CPF deve conter exatamente 11 números e ser válido.";
    }

    setErrors(errors);

    // Se não houver erros, você pode enviar o formulário
    if (Object.keys(errors).length === 0) {
      alert("Formulário enviado com sucesso!");
    }
  };

  const formatCnpj = (cnpj) => {
    if (cnpj.length <= 2) return cnpj;
    if (cnpj.length <= 5) return `${cnpj.slice(0, 2)}.${cnpj.slice(2)}`;
    if (cnpj.length <= 8)
      return `${cnpj.slice(0, 2)}.${cnpj.slice(2, 5)}.${cnpj.slice(5)}`;
    if (cnpj.length <= 12)
      return `${cnpj.slice(0, 2)}.${cnpj.slice(2, 5)}.${cnpj.slice(
        5,
        8
      )}/${cnpj.slice(8)}`;
    return `${cnpj.slice(0, 2)}.${cnpj.slice(2, 5)}.${cnpj.slice(
      5,
      8
    )}/${cnpj.slice(8, 12)}-${cnpj.slice(12)}`;
  };

  const sendToWhatsapp = async () => {
    const validationErrors = {};

    if (!cnpj) {
      validationErrors.cnpj = "O campo CNPJ é obrigatório.";
    } else if (!validateCnpj(cnpj)) {
      validationErrors.cnpj = "O CNPJ deve conter exatamente 14 números.";
    }

    if (!name) {
      validationErrors.name = "O campo Nome é obrigatório.";
    } else if (!validateName(name)) {
      validationErrors.name = "Preencha o nome completo";
    }

    if (!phone) {
      validationErrors.phone = "O campo Telefone é obrigatório.";
    } else if (!validatePhone(phone)) {
      validationErrors.phone = "Número inválido.";
    }

    if (!position) {
      validationErrors.position = "O campo Cargo é obrigatório.";
    }

    if (!email) {
      validationErrors.email = "O campo E-mail é obrigatório.";
    } else if (!validateEmail(email)) {
      validationErrors.email = "E-mail inválido.";
    }

    if (!institution) {
      validationErrors.institution = "O campo Nome da Câmara é obrigatório.";
    }

    if (!endereco) {
      validationErrors.endereco = "O campo Endereço é obrigatório.";
    }

    if (!cpf) {
      validationErrors.cpf = "O campo Cpf é obrigatório.";
    } else !validateInstitution(institution);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    // Aqui o número do WhatsApp precisa estar no formato correto
    const whatsappNumber = "5551997328822"; // Certifique-se de que este número está correto com o código do país
    const formatPhone = (phone) => {
      const formattedPhone = phone.replace(/\D/g, ""); // Remove caracteres não numéricos

      if (formattedPhone.length !== 11) return phone; // Retorna original se não tiver 11 dígitos

      return formattedPhone.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
    };
    const whatsappMessage = `Olá! Vim através do site, e essa mensagem se refere a uma inscrição.

Curso/Evento: ${content.texts.contactForm.title}.
Data e hora: ${contentCursos.texts.curso1.date}, às ${contentCursos.texts.curso1.time}.

Nome: ${name}.
Cpf: ${cpf}.
Telefone: ${phone}.
Cargo: ${position}.
E-mail: ${email}.
Nome da Câmara: ${institution}.
CNPJ: ${cnpj}.
Endereço: ${endereco}.`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Abrir WhatsApp em uma nova aba
    try {
      window.open(whatsappURL, "_blank");
    } catch (error) {
      console.error("Erro ao abrir o WhatsApp: ", error);
    }

    // Limpar os campos após o envio
    setName("");
    setPhone("");
    setEmail("");
    setCpf("");
    setPosition("");
    setInstitution("");
    setIsSubmitting(false);
  };

  const validateName = (name) => {
    const namePattern = /^[a-zA-ZÀ-ÿ\s]{5,}$/; // Permite pelo menos 5 caracteres (letras e espaços)
    return namePattern.test(name.trim());
  };

  const validatePhone = (phone) => {
    const cleanedPhone = phone.replace(/\D/g, ""); // Remove caracteres não numéricos
    return cleanedPhone.length >= 10; // Pelo menos 10 dígitos
  };

  const validatePosition = (position) => {
    const positionPattern = /^[a-zA-ZÀ-ÿ\s]{5,}$/; // Permite pelo menos 5 caracteres (letras e espaços)
    return positionPattern.test(position.trim());
  };

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email.trim());
  };

  const validateInstitution = (institution) => {
    const institutionPattern = /^[a-zA-ZÀ-ÿ\s]{5,}$/; // Permite pelo menos 5 caracteres (letras e espaços)
    return institutionPattern.test(institution.trim());
  };

  const validateEndereco = (endereco) => {
    const enderecoPattern = /^[a-zA-ZÀ-ÿ\s]{5,}$/; // Permite pelo menos 5 caracteres (letras e espaços)
    return enderecoPattern.test(endereco.trim());
  };

  const formatCpf = (value) => {
    const onlyNumbers = value.replace(/\D/g, ""); // Remove caracteres não numéricos
    const limitedNumbers = onlyNumbers.slice(0, 11); // Limita a 11 dígitos

    return limitedNumbers
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
      .replace(/(\d{3})\.(\d{3})\.(\d{3})(\d{1,2})/, "$1.$2.$3-$4");
  };
  const handleCpfChange = (e) => {
    const formattedCpf = formatCpf(e.target.value);
    setCpf(formattedCpf);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};

    // Valida se o CPF está vazio
    if (!cpf) {
      errors.cpf = "O campo CPF é obrigatório.";
    } else if (!validateCpf(cpf.replace(/\D/g, ""))) {
      // Remove a máscara para validar o CPF
      errors.cpf = "O CPF deve conter exatamente 11 números e ser válido.";
    }

    setErrors(errors);

    // Se não houver erros, você pode enviar o formulário
    if (Object.keys(errors).length === 0) {
      alert("Formulário enviado com sucesso!");
    }
  };

  const validateCnpj = (cnpj) => {
    // Expressão regular para CNPJ com ou sem máscara
    const cnpjPattern = /^\d{2}(\.?\d{3}){2}\/\d{4}-\d{2}$/; // Para permitir a máscara no formato: 12.345.678/0001-90
    const plainCnpjPattern = /^\d{14}$/; // Para permitir apenas números: 12345678000190

    // Se o CNPJ for no formato com máscara
    if (cnpjPattern.test(cnpj.trim())) {
      return true;
    }

    // Se o CNPJ for apenas números
    if (plainCnpjPattern.test(cnpj.trim())) {
      return true;
    }

    return false;
  };

  const formatPhoneNumber = (phoneNumber) => {
    let cleaned = phoneNumber.replace(/\D/g, ""); // Remove tudo que não for número

    if (cleaned.length > 11) cleaned = cleaned.slice(0, 11); // Limita a 11 dígitos

    // Formatação dinâmica conforme o número é digitado
    if (cleaned.length <= 2) return `(${cleaned}`;
    if (cleaned.length <= 6)
      return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2)}`;
    if (cleaned.length <= 10) {
      return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 6)}-${cleaned.slice(
        6
      )}`;
    }
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(
      7
    )}`;
  };

  const sendEmail = async () => {
    setIsSubmitting(true); // Mostra "Enviando..."

    const templateParams = {
      name,
      cpf,
      phone,
      position,
      institution,
      endereco,
      email,
      cnpj,
    };

    try {
      const result = await emailjs.send(
        "service_gik4w8p", // substitua aqui
        "template_o4kc0ak", // substitua aqui
        templateParams,
        "8bJXn-qPMOzTraXbd" // substitua aqui
      );

      console.log("E-mail enviado com sucesso!", result.text);
      alert("Inscrição enviada com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar e-mail:", error);
      alert("Erro ao enviar a inscrição. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className=" bg-[#0E2B40] p-6 rounded-[10px] w-full h-auto">
      <div className="w-full text-paragraph3 phone3:text-paragraph4 ">
        {/* Nome */}
        <div className="mb-6">
          <div className="flex mb-2 text-gray-500 tablet1:mb-0">
            <div className="flex items-center justify-center w-12 px-1 bg-white">
              <FolderPen />
            </div>
            <input
              className="w-full px-1 py-2 border-0 rounded-none"
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              placeholder="Nome"
              required
            />
          </div>
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>{" "}
        {/* Cpf */}
        <div className="mb-6">
          <div className="flex mb-2 text-gray-500 tablet1:mb-0">
            <div className="flex items-center justify-center w-12 px-1 bg-white">
              <CiCreditCard1 />
            </div>
            <input
              className="w-full px-1 py-2 border-0 rounded-none"
              type="tel"
              id="cpf"
              value={cpf}
              onChange={handleCpfChange}
              placeholder="Cpf"
              required
            />
          </div>
          {errors.cpf && <p className="text-red-500">{errors.cpf}</p>}
        </div>
        {/* Telefone */}
        <div className="mb-6">
          <div className="flex mb-2 text-gray-500 tablet1:mb-0">
            <div className="flex items-center justify-center w-12 px-1 bg-white">
              <Phone />
            </div>
            <input
              className="w-full px-1 py-2 border-0 rounded-none"
              type="tel"
              id="phone"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="Telefone"
              required
            />
          </div>
          {errors.phone && <p className="text-red-500">{errors.phone}</p>}
        </div>
        {/* Cargo */}
        <div className="mb-6">
          <div className="flex mb-2 text-gray-500 tablet1:mb-0">
            <div className="flex items-center justify-center w-12 px-1 bg-white">
              <UserCheck />
            </div>
            <input
              className="w-full px-1 py-2 border-0 rounded-none"
              type="text"
              id="position"
              value={position}
              onChange={handlePositionChange}
              placeholder="Cargo"
              required
            />
          </div>
          {errors.position && <p className="text-red-500">{errors.position}</p>}
        </div>
        {/* Instituição */}
        <div className="mb-6">
          <div className="flex mb-2 text-gray-500 tablet1:mb-0">
            <div className="flex items-center justify-center w-12 px-1 bg-white">
              <Building />
            </div>
            <input
              className="w-full px-1 py-2 border-0 rounded-none"
              type="text"
              id="institution"
              value={institution}
              onChange={handleInstitutionChange}
              placeholder="Nome da Câmara"
              required
            />
          </div>
          {errors.institution && (
            <p className="text-red-500">{errors.institution}</p>
          )}
        </div>
        {/* Endereço */}
        <div className="mb-6">
          <div className="flex mb-2 text-gray-500 tablet1:mb-0">
            <div className="flex items-center justify-center w-12 px-1 bg-white">
              <MapPin />
            </div>
            <input
              className="w-full px-1 py-2 border-0 rounded-none"
              type="text"
              id="endereco"
              value={endereco}
              onChange={handleEnderecoChange}
              placeholder="Endereço"
              required
            />
          </div>
          {errors.endereco && <p className="text-red-500">{errors.endereco}</p>}
        </div>
        {/* Email */}
        <div className="mb-6">
          <div className="flex mb-2 text-gray-500 tablet1:mb-0">
            <div className="flex items-center justify-center w-12 px-1 bg-white">
              <Mail />
            </div>
            <input
              className="w-full px-1 py-2 border-0 rounded-none"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
              required
            />
          </div>
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        {/* Cnpj */}
        <div className="mb-6">
          <div className="flex mb-2 text-gray-500 tablet1:mb-0">
            <div className="flex items-center justify-center w-12 px-1 bg-white">
              <BriefcaseBusiness />
            </div>
            <input
              className="w-full px-1 py-2 border-0 rounded-none"
              type="tel"
              id="cnpj"
              value={cnpj}
              onChange={handleCnpjChange}
              placeholder="Cnpj"
              required
            />
          </div>
          {errors.cnpj && <p className="text-red-500">{errors.cnpj}</p>}
        </div>
        {/* Botão */}
        <button
          type="button"
          className="flex items-center w-full font-medium text-[#0E2B40] bg-primary transition-all rounded-lg h-10 phone2:h-12 hover:scale-105"
          onClick={sendEmail}
        >
          <div className="flex items-center justify-center w-full">
            <img
              src={WhatsAppIcon}
              className="w-6 h-6 mr-2 phone2:w-8 phone2:h-8"
              alt="WhatsApp Icon"
            />
            <p>{isSubmitting ? "Enviando..." : "Enviar inscrição"}</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default WhatsappForm;
