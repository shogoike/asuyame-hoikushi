import React from 'react';
import { Building2, User, Hash, Calendar, MapPin, Mail, Phone } from 'lucide-react';

const companyInfo = [
  { icon: Building2, label: '会社名', value: '株式会社8seAls' },
  { icon: User, label: '代表者', value: '池末 知史' },
  { icon: Hash, label: '法人番号', value: '9040001128415' },
  { icon: Calendar, label: '設立', value: '2023年5月10日' },
  {
    icon: MapPin,
    label: '所在地',
    value: '〒273-0137 千葉県鎌ケ谷市道野辺本町2-26-1 コスモ鎌ヶ谷602',
  },
  {
    icon: Mail,
    label: 'メール',
    value: 'info@8seals.com',
    href: 'mailto:info@8seals.com',
  },
  {
    icon: Phone,
    label: '電話番号',
    value: '080-2501-0289',
    href: 'tel:080-2501-0289',
  },
];

const commercialInfo = [
  { label: '販売事業者', value: '株式会社8seAls' },
  { label: '運営責任者', value: '池末 知史' },
  {
    label: '所在地',
    value: '〒273-0137 千葉県鎌ケ谷市道野辺本町2-26-1 コスモ鎌ヶ谷602',
  },
  { label: '連絡先', value: 'info@8seals.com / 080-2501-0289' },
  { label: 'サービス名', value: 'アスヤメ（保育士専門退職代行サービス）' },
  { label: '料金', value: '正社員 19,800円（税込）／アルバイト 9,800円（税込）' },
  { label: '支払方法', value: '銀行振込・クレジットカード' },
  { label: 'サービス提供時期', value: 'お申し込み確認後、即日対応' },
  {
    label: '返金について',
    value: '退職できなかった場合、全額返金保証',
  },
];

const Company = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">
        {/* Company Info */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 text-sm font-bold rounded-full mb-3">
              会社概要
            </span>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              運営会社について
            </h1>
          </div>

          <div className="bg-white rounded-3xl shadow-md overflow-hidden">
            {companyInfo.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className={`flex items-start p-5 ${
                    index !== companyInfo.length - 1
                      ? 'border-b border-gray-100'
                      : ''
                  }`}
                >
                  <div className="flex items-center space-x-3 w-32 md:w-40 flex-shrink-0">
                    <IconComponent size={18} className="text-orange-500" />
                    <span className="text-sm font-bold text-gray-700">
                      {item.label}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-orange-500 hover:underline"
                      >
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Commercial Transaction Act */}
        <section>
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 text-sm font-bold rounded-full mb-3">
              法定表示
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              特定商取引法に基づく表記
            </h2>
          </div>

          <div className="bg-white rounded-3xl shadow-md overflow-hidden">
            {commercialInfo.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row md:items-start p-5 ${
                  index !== commercialInfo.length - 1
                    ? 'border-b border-gray-100'
                    : ''
                }`}
              >
                <div className="w-full md:w-40 flex-shrink-0 mb-1 md:mb-0">
                  <span className="text-sm font-bold text-gray-700">
                    {item.label}
                  </span>
                </div>
                <div className="text-sm text-gray-600">{item.value}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Company;
