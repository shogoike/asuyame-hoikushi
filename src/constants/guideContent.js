import {
  Flag,
  MessageSquare,
  FileText,
  Users,
  Smile,
  Heart,
  Shield,
  Sparkles,
} from 'lucide-react';

export const heroContent = {
  catchCopy: '子どもたちの未来と同じくらい、\nあなたの人生も大切。',
  subCopy:
    '「辞めにくい」と言われる保育現場で、心身を壊さず、円満に次のステップへ進むための完全ガイド。',
  features: [
    { icon: Heart, text: '保育士経験者が監修' },
    { icon: Shield, text: '法律に基づいた正しい手順' },
    { icon: Sparkles, text: '新しい一歩を応援' },
  ],
};

export const roadmapSteps = [
  {
    step: 1,
    title: '決意と確認',
    timing: '退職希望日の3〜4ヶ月前',
    action:
      '就業規則の確認。年度末（3月末）が基本だが、心身の限界なら即相談。退職届の提出期限や有給休暇の残日数もこのタイミングでチェックしておきましょう。',
    tips: '就業規則がわからない場合は、総務や事務担当に確認を。',
    icon: Flag,
    color: 'orange',
  },
  {
    step: 2,
    title: '意思表示',
    timing: '退職希望日の3ヶ月前',
    action:
      'まずは「直属の上司」へ口頭で。多忙な時間を避け、別室を予約する。「ご相談があります」と事前にアポを取ると◎。',
    tips: '理由は「一身上の都合」でOK。詳細を話す義務はありません。',
    icon: MessageSquare,
    color: 'pink',
  },
  {
    step: 3,
    title: '書類提出',
    timing: '合意後すぐ',
    action:
      '退職願の提出。受理されたら「退職届」の準備。コピーを手元に残しておくと安心です。',
    tips: '退職届は手書きでも印刷でもOK。形式より提出した事実が大切。',
    icon: FileText,
    color: 'purple',
  },
  {
    step: 4,
    title: '引き継ぎ',
    timing: '退職の1ヶ月前〜',
    action:
      '児童票、行事計画、保護者への挨拶（園の方針に従う）。引き継ぎノートを作成しておくと、後任の方も安心です。',
    tips: '完璧を目指さず、できる範囲で丁寧に。',
    icon: Users,
    color: 'blue',
  },
  {
    step: 5,
    title: '退職当日',
    timing: '最終出勤日',
    action:
      '備品返却と挨拶回り。笑顔で「感謝」を伝えて完結。子どもたちとの時間を大切に過ごしてください。',
    tips: '次のステップへ、自信を持って踏み出しましょう！',
    icon: Smile,
    color: 'green',
  },
];

export const faqItems = [
  {
    question: '「担任を放り出すのか」と責められたら？',
    answer:
      '「最後まで責任を持って引き継ぎをします」と伝えましょう。クラス運営は組織の責任であり、個人の人生を縛るものではありません。あなたが辞めることは、園が人員確保する問題であって、あなたの責任ではありません。',
    category: '引き止め対策',
  },
  {
    question: '「次の人が決まるまで待って」と言われたら？',
    answer:
      '期限を切りましょう。「〇月末までは最大限協力しますが、それ以降は退職します」とはっきり意思表示を。民法上、正社員は2週間前の申告で退職可能です。',
    category: '引き止め対策',
  },
  {
    question: '「子どもたちがかわいそう」と言われたら？',
    answer:
      'これは感情に訴える典型的な引き止めです。子どもたちへの愛情と、あなた自身の人生は別問題。あなたが心身ともに健康でいることが、結果的に子どもたちのためにもなります。',
    category: '引き止め対策',
  },
  {
    question: '園長に直接言えない場合は？',
    answer:
      '主任や副園長など、話しやすい上司に相談するのも一つの方法です。それでも難しい場合は、退職代行サービスの利用も検討してください。あなたの心身の健康が最優先です。',
    category: '相談方法',
  },
  {
    question: '有給消化はできますか？',
    answer:
      '有給休暇は労働者の権利です。遠慮せず申請しましょう。「引き継ぎがあるから」と断られても、法律上は取得可能です。私たちがサポートする場合は、有給消化の交渉もお任せください。',
    category: '権利・制度',
  },
  {
    question: '年度途中でも退職できますか？',
    answer:
      '法律上は可能です。民法627条により、正社員は退職の2週間前に申告すれば退職できます。ただし、円満退職を望む場合は、1〜2ヶ月の猶予があると良いでしょう。心身に限界がある場合は、すぐに相談してください。',
    category: '権利・制度',
  },
];

export const checklistCategories = [
  {
    id: 'return',
    title: '園に返却するもの',
    description: '最終出勤日までに確認しましょう',
    color: 'orange',
    items: [
      { id: 'r1', label: '健康保険証', important: true },
      { id: 'r2', label: 'エプロン・名札' },
      { id: 'r3', label: '鍵（ロッカー・門扉など）', important: true },
      { id: 'r4', label: '保育資料・マニュアル' },
      { id: 'r5', label: '印鑑（園に預けている場合）' },
      { id: 'r6', label: '上履き・外履き' },
      { id: 'r7', label: '園の備品（おもちゃ・教材など）' },
      { id: 'r8', label: '制服（貸与の場合）' },
    ],
  },
  {
    id: 'receive',
    title: '園から受け取るもの',
    description: '転職・失業保険に必要な書類です',
    color: 'blue',
    items: [
      { id: 'g1', label: '離職票（1・2）', important: true },
      { id: 'g2', label: '雇用保険被保険者証', important: true },
      { id: 'g3', label: '年金手帳（預けている場合）' },
      { id: 'g4', label: '源泉徴収票', important: true },
      { id: 'g5', label: '健康保険資格喪失証明書' },
      { id: 'g6', label: '退職証明書（必要な場合）' },
    ],
  },
  {
    id: 'personal',
    title: '個人で準備すること',
    description: '退職後の手続きに備えて',
    color: 'green',
    items: [
      { id: 'p1', label: '国民健康保険への切り替え確認' },
      { id: 'p2', label: '国民年金への切り替え確認' },
      { id: 'p3', label: '失業保険の申請準備（離職票が届いたら）' },
      { id: 'p4', label: '転職活動の準備（履歴書・職務経歴書）' },
      { id: 'p5', label: '次の園・職場への提出書類確認' },
    ],
  },
];

export const ctaContent = {
  title: '退職の不安、一人で抱えないでください',
  description:
    '保育士専門のスタッフが、あなたの状況に合わせて丁寧にサポートします。相談は何度でも無料です。',
  buttonText: 'LINEで無料相談する',
  subText: '正社員 19,800円 / アルバイト 9,800円（税込）・全額返金保証付き',
  benefits: [
    '保育士経験のあるスタッフが対応',
    '園への連絡はすべて代行',
    '有給消化・退職金もサポート',
  ],
};
