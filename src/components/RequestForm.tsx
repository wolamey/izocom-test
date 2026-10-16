import { useState, useEffect } from 'react';
import { Send, Paperclip, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from './ui/Button';

interface RequestFormProps {
  productName?: string;
  compact?: boolean;
}

export default function RequestForm({ productName, compact = false }: RequestFormProps) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    product: productName || '',
    message: '',
    consent: false,
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (productName) {
      setForm(f => ({ ...f, product: productName }));
    }
  }, [productName]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = 'Укажите имя';
    if (!form.phone.trim() && !form.email.trim()) errs.phone = 'Укажите телефон или email';
    if (!form.consent) errs.consent = 'Необходимо согласие';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', phone: '', email: '', company: '', product: productName || '', message: '', consent: false });
    }, 1500);
  };

  const handleChange = (field: string, value: string | boolean) => {
    setForm(f => ({ ...f, [field]: value }));
    if (errors[field]) {
      setErrors(e => { const n = { ...e }; delete n[field]; return n; });
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <CheckCircle size={48} className="mx-auto text-green-500 mb-4" />
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Запрос отправлен</h3>
        <p className="text-gray-600 text-sm mb-4">Мы свяжемся с вами в ближайшее время.</p>
        <button
          onClick={() => setStatus('idle')}
          className="text-brand-600 text-sm font-medium hover:underline"
        >
          Отправить ещё один запрос
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={compact ? '' : 'space-y-5'}>
      {!compact && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Ваше имя <span className="text-brand-600">*</span>
            </label>
            <input
              type="text"
              value={form.name}
              onChange={e => handleChange('name', e.target.value)}
              className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent ${errors.name ? 'border-red-300 bg-red-50' : 'border-gray-200'}`}
              placeholder="Иван Иванов"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Телефон <span className="text-brand-600">*</span>
            </label>
            <input
              type="tel"
              value={form.phone}
              onChange={e => handleChange('phone', e.target.value)}
              className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent ${errors.phone ? 'border-red-300 bg-red-50' : 'border-gray-200'}`}
              placeholder="+7 (___) ___-__-__"
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>
        </div>
      )}

      {(compact || !compact) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={e => handleChange('email', e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
              placeholder="email@company.ru"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Организация</label>
            <input
              type="text"
              value={form.company}
              onChange={e => handleChange('company', e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
              placeholder="ООО «Компания»"
            />
          </div>
        </div>
      )}

      {!compact && (
        <>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Продукция</label>
            <input
              type="text"
              value={form.product}
              onChange={e => handleChange('product', e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
              placeholder="Например: Труба 108×4 в ППУ-ПЭ"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Описание задачи</label>
            <textarea
              value={form.message}
              onChange={e => handleChange('message', e.target.value)}
              rows={4}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent resize-none"
              placeholder="Опишите вашу задачу, укажите объёмы, сроки..."
            />
          </div>
          <div className="flex items-center gap-2">
            <Paperclip size={16} className="text-gray-400" />
            <span className="text-sm text-gray-500">Прикрепите спецификацию (до 10 МБ)</span>
          </div>
        </>
      )}

      <div>
        <label className="flex items-start gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={form.consent}
            onChange={e => handleChange('consent', e.target.checked)}
            className="mt-0.5 w-4 h-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500"
          />
          <span className="text-xs text-gray-500">
            Я согласен на обработку персональных данных в соответствии с{' '}
            <a href="#" className="text-brand-600 hover:underline">политикой конфиденциальности</a>
          </span>
        </label>
        {errors.consent && (
          <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
            <AlertCircle size={12} /> {errors.consent}
          </p>
        )}
      </div>

      <Button
        type="submit"
        disabled={status === 'sending'}
        variant="primary"
        size={compact ? 'md' : 'lg'}
        fullWidth={compact}
        icon={status === 'sending' ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Send size={16} />}
      >
        {status === 'sending' ? 'Отправка...' : 'Отправить запрос'}
      </Button>
    </form>
  );
}
