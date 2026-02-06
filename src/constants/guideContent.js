import {
  Flag,
  MessageSquare,
  FileText,
  Users,
  Smile,
} from 'lucide-react';

export const heroContent = {
  catchCopy: '子どもたちの未来と同じくらい、\nあなたの人生も大切。',
  subCopy:
    '「辞めにくい」と言われる保育現場で、心身を壊さず、円満に次のステップへ進むための完全ガイド。',
};

export const roadmapSteps = [
  {
    step: 1,
    title: '決意と確認',
    timing: '退職希望日の3〜4ヶ月前',
    action:
      '就業規則の確認。年度末（3月末）が基本だが、心身の限界なら即相談。',
    icon: Flag,
    color: 'orange',
  },
  {
    step: 2,
    title: '意思表示',
    timing: '退職希望日の3ヶ月前',
    action:
      'まずは「直属の上司」へ口頭で。多忙な時間を避け、別室を予約する。',
    icon: MessageSquare,
    color: 'pink',
  },
  {
    step: 3,
    title: '書類提出',
    timing: '合意後すぐ',
    action: '退職願の提出。受理されたら「退職届」の準備。',
    icon: FileText,
    color: 'purple',
  },
  {
    step: 4,
    title: '引き継ぎ',
    timing: '退職の1ヶ月前〜',
    action:
      '児童票、行事計画、保護者への挨拶（園の方針に従う）。',
    icon: Users,
    color: 'blue',
  },
  {
    step: 5,
    title: '退職当日',
    timing: '最終出勤日',
    action: '備品返却と挨拶回り。笑顔で「感謝」を伝えて完結。',
    icon: Smile,
    color: 'green',
  },
];

export const faqItems = [
  {
    question: '「担任を放り出すのか」と責められたら？',
    answer:
      '「最後まで責任を持って引き継ぎをします」と伝えましょう。クラス運営は組織の責任であり、個人の人生を縛るものではありません。',
  },
  {
    question: '「次の人が決まるまで待って」と言われたら？',
    answer:
      '期限を切りましょう。「〇月末までは最大限協力しますが、それ以降は退職します」とはっきり意思表示を。',
  },
];

export const checklistCategories = [
  {
    id: 'return',
    title: '園に返却するもの',
    items: [
      { id: 'r1', label: '健康保険証' },
      { id: 'r2', label: 'エプロン・名札' },
      { id: 'r3', label: '鍵' },
      { id: 'r4', label: '保育資料' },
      { id: 'r5', label: '印鑑（園に預けている場合）' },
    ],
  },
  {
    id: 'receive',
    title: '園から受け取るもの',
    items: [
      { id: 'g1', label: '離職票' },
      { id: 'g2', label: '雇用保険被保険者証' },
      { id: 'g3', label: '年金手帳' },
      { id: 'g4', label: '源泉徴収票' },
    ],
  },
];
