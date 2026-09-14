import React, { useState } from 'react';
import { X, GraduationCap, CheckCircle2, Send, Calendar, ShieldCheck } from 'lucide-react';

interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdmissionModal: React.FC<AdmissionModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    studentName: '',
    guardianName: '',
    applyingClass: 'ECE 1',
    phone: '',
    email: '',
    address: 'Minapin, Nagar',
    previousSchool: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const existing = JSON.parse(localStorage.getItem('uswa_applications_list') || '[]');
      const newApp = {
        id: 'APP-' + Date.now().toString().slice(-4),
        studentName: formData.studentName,
        guardianName: formData.guardianName,
        applyingClass: formData.applyingClass,
        phone: formData.phone,
        address: formData.address || 'Minapin, Nagar',
        previousSchool: formData.previousSchool || 'N/A',
        status: 'Pending Review',
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      };
      localStorage.setItem('uswa_applications_list', JSON.stringify([newApp, ...existing]));
    } catch {
      // LocalStorage fallback
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-xs p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#07132B] px-6 py-5 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-500/40 flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-white">
                Admission Application (Session 2026)
              </h3>
              <p className="text-xs text-blue-200">
                Uswa Public School Minapin • Nagar Valley
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4 border border-blue-100">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-heading font-bold text-xl text-[#0A192F] mb-2">
                Application Submitted Successfully!
              </h4>
              <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
                Thank you, <strong className="text-slate-800">{formData.guardianName || 'Guardian'}</strong>. Your application for <strong className="text-slate-800">{formData.studentName}</strong> ({formData.applyingClass}) has been recorded for Academic Session 2026.
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs text-slate-600 space-y-1.5 mb-6 max-w-md mx-auto">
                <p><strong>Next Step:</strong> Our admissions registrar will review the details and contact you via {formData.phone || 'phone'} to arrange the assessment interview.</p>
                <p><strong>Venue:</strong> Principal Office, Uswa Public School Minapin Campus.</p>
              </div>
              <button
                onClick={handleReset}
                className="bg-[#1E40AF] hover:bg-[#1D4ED8] text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-colors"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-blue-50/70 border border-blue-200/80 rounded-xl p-3 flex items-center gap-3 text-xs text-blue-900">
                <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                <span>
                  Official registration for Session 2026. Merit-based intake for Early Years through SSC levels.
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Student Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ali Raza"
                    value={formData.studentName}
                    onChange={(e) =>
                      setFormData({ ...formData, studentName: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Father / Guardian Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Hussain Mir"
                    value={formData.guardianName}
                    onChange={(e) =>
                      setFormData({ ...formData, guardianName: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Applying For Class *
                  </label>
                  <select
                    value={formData.applyingClass}
                    onChange={(e) =>
                      setFormData({ ...formData, applyingClass: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600 bg-white"
                  >
                    <option value="ECE 1">ECE 1</option>
                    <option value="ECE 2">ECE 2</option>
                    <option value="Class 1">Class 1</option>
                    <option value="Class 2">Class 2</option>
                    <option value="Class 3">Class 3</option>
                    <option value="Class 4">Class 4</option>
                    <option value="Class 5">Class 5</option>
                    <option value="Class 6">Class 6</option>
                    <option value="Class 7">Class 7</option>
                    <option value="Class 8">Class 8</option>
                    <option value="Class 9 (SSC-I)">Class 9 (SSC-I)</option>
                    <option value="Class 10 (SSC-II)">Class 10 (SSC-II)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Contact Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="03XX-XXXXXXX"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Address / Village in Nagar
                  </label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                    placeholder="Minapin / Pisan / Sikandarabad"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Previous School (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.previousSchool}
                    onChange={(e) =>
                      setFormData({ ...formData, previousSchool: e.target.value })
                    }
                    placeholder="School previously attended"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div className="pt-3 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 text-sm font-semibold text-slate-600 hover:text-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-[#1E40AF] hover:bg-[#1D4ED8] text-white text-sm font-semibold px-6 py-2.5 rounded-xl shadow-md transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Application</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
