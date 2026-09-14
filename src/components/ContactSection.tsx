import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Building } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    studentClass: 'Class 1',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-blue-700" />
            <span>Campus Location &amp; Contact</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0A192F] tracking-tight">
            Connect With School Administration
          </h2>

          <p className="mt-3 text-slate-600 text-base">
            Have questions about admissions, academic curriculum, or campus visits? Reach out to our Minapin office directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 border border-blue-100">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0A192F] font-heading">
                    School Campus Address
                  </h3>
                  <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                    Uswa Public School Minapin, Minapin Village, District Nagar, Gilgit-Baltistan, Pakistan
                  </p>
                  <p className="text-xs text-blue-700 font-semibold mt-2">
                    Nagar Valley • Karakoram Highway Access
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 border border-blue-100">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0A192F] font-heading">
                    System Affiliation
                  </h3>
                  <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                    USWA Education System (UES) Gilgit-Baltistan • Friends’ Educational &amp; Medical Trust (FEMT)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 border border-blue-100">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0A192F] font-heading">
                    Office &amp; Assembly Hours
                  </h3>
                  <p className="text-slate-600 text-sm mt-1">
                    Monday – Saturday: 8:00 AM – 2:00 PM
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Friday Assembly &amp; Half Day
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-7 sm:p-9 rounded-2xl border border-slate-200 shadow-xs">
            <h3 className="text-xl font-bold text-[#0A192F] font-heading mb-2">
              Send an Inquiry to Principal's Office
            </h3>
            <p className="text-sm text-slate-600 mb-6">
              Fill in your details below and our admissions representative will respond promptly.
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-blue-50 border border-blue-200 text-center animate-in fade-in">
                <CheckCircle2 className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <h4 className="text-lg font-bold text-blue-950 font-heading">
                  Inquiry Received Successfully
                </h4>
                <p className="text-sm text-slate-700 mt-1 max-w-md mx-auto">
                  Thank you for reaching out. The administration of Uswa Public School Minapin will contact you regarding Session 2026.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-semibold text-blue-700 underline cursor-pointer"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Parent / Guardian Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Muhammad Ali"
                      value={formData.parentName}
                      onChange={(e) =>
                        setFormData({ ...formData, parentName: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-blue-600 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Contact Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 0345-XXXXXXX"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-blue-600 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Admission Class Sought
                  </label>
                  <select
                    value={formData.studentClass}
                    onChange={(e) =>
                      setFormData({ ...formData, studentClass: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-blue-600 text-sm bg-white"
                  >
                    <option value="Nursery / Prep">Early Years (Nursery / Prep / KG)</option>
                    <option value="Class 1 - 5">Primary Section (Class 1 to 5)</option>
                    <option value="Class 6 - 8">Middle Section (Class 6 to 8)</option>
                    <option value="SSC-I / Class 9">Secondary SSC-I (Class 9)</option>
                    <option value="SSC-II / Class 10">Secondary SSC-II (Class 10)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Message / Query
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Enter any questions regarding documents, transport, or admission test schedule..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-blue-600 text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1E40AF] hover:bg-[#1D4ED8] text-white text-sm font-semibold px-6 py-3 rounded-xl shadow-xs transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
