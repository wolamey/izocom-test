// Страница входа в админ-панель.
// Логическая заглушка: реальной авторизации и проверок пока нет —
// после готовности backend здесь будет запрос к API аутентификации.
import { useState } from 'react';
import type { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminLoginPage() {
  const navigate = useNavigate();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: заменить на реальный запрос к API авторизации, когда backend будет готов.
    navigate('/admin/home-page');
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-sm">
        {/* Логотип */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 rounded-xl bg-brand-600 flex items-center justify-center text-white font-bold text-lg mb-3">
            ИП
          </div>
          <h1 className="text-xl font-bold text-white">Админ-панель</h1>
          <p className="text-sm text-gray-500 mt-1">Вход для сотрудников компании</p>
        </div>

        {/* Форма */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 border border-white/10 rounded-2xl p-6 space-y-4"
        >
          <label className="block">
            <span className="block text-sm font-medium text-gray-300 mb-1.5">Логин</span>
            <input
              type="text"
              autoComplete="username"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              className="w-full bg-gray-950 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-500/50 transition-colors"
            />
          </label>

          <label className="block">
            <span className="block text-sm font-medium text-gray-300 mb-1.5">Пароль</span>
            <input
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-950 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-500/50 transition-colors"
            />
          </label>

          <button
            type="submit"
            className="w-full bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white font-medium text-sm rounded-lg px-4 py-2.5 transition-colors shadow-lg shadow-brand-600/20"
          >
            Войти
          </button>
        </form>
      </div>
    </div>
  );
}
