import React from "react";
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare } from "lucide-react";

const emergencyContacts = [
  {
    name: "Krishi Vigyan Kendra",
    number: "1800-180-1551",
  },
  {
    name: "Agri Helpline (Kisan Call Center)",
    number: "1800-180-1551",
  },
  {
    name: "Soil Health Support",
    number: "1800-180-5141",
  },
  {
    name: "Crop Insurance Support",
    number: "1800-180-1111",
  },
  {
    name: "Weather Advisory",
    number: "1800-180-1717",
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-green-50 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
          Emergency Contacts for Farmers
        </h2>

        <ul className="space-y-4">
          {emergencyContacts.map((contact, index) => (
            <li
              key={index}
              className="flex flex-col md:flex-row justify-between items-start md:items-center border border-gray-200 rounded-lg p-4"
            >
              <div>
                <h4 className="text-lg font-semibold text-gray-800">{contact.name}</h4>
                <p className="text-gray-600">📞 {contact.number}</p>
              </div>
              <div className="flex gap-3 mt-3 md:mt-0">
                <a href={`tel:${contact.number}`}>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Phone size={16} />
                    Call
                  </Button>
                </a>
                <a href={`sms:${contact.number}`}>
                  <Button className="flex items-center gap-2">
                    <MessageSquare size={16} />
                    Message
                  </Button>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
