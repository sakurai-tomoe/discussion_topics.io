import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const LLMReport = () => {
  // 全体のスタイル定義
  const chartStyle = {
    colors: {
      primary: '#2563EB', // 濃い青
      secondary: '#60A5FA', // 薄い青
      warning: '#F59E0B', // 濃いイエロー
      caution: '#FCD34D', // 薄いイエロー
      gray: '#6B7280', // グレー
      light: '#F3F4F6' // ライトグレー
    },
    barColors: {
      '使用率': '#2563EB', // 濃い青
      '未使用率': '#F59E0B', // 濃いイエロー
      '未回答率': '#E5E7EB' // ライトグレー
    },
    fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif'
  };

  // 回答率データ
  const responseRateData = [
    { name: '全体', rate: 55 },
    { name: '部門1', rate: 0 },
    { name: '部門2', rate: 83 },
    { name: '部門3', rate: 67 },
    { name: '部門4', rate: 63 },
    { name: '部門5', rate: 48 },
    { name: '部門6', rate: 44 },
    { name: '部門7', rate: 88 },
    { name: '部門8', rate: 60 }
  ];

  // 積み上げ棒グラフ用データ - 順序変更
  const stackedBarData = [
    { name: '全体', 使用率: 41, 未使用率: 14, 未回答率: 45 },
    { name: '部門1', 使用率: 0, 未使用率: 0, 未回答率: 100 },
    { name: '部門2', 使用率: 83, 未使用率: 0, 未回答率: 17 },
    { name: '部門3', 使用率: 33, 未使用率: 33, 未回答率: 33 },
    { name: '部門4', 使用率: 63, 未使用率: 0, 未回答率: 38 },
    { name: '部門5', 使用率: 36, 未使用率: 12, 未回答率: 52 },
    { name: '部門6', 使用率: 11, 未使用率: 33, 未回答率: 56 },
    { name: '部門7', 使用率: 88, 未使用率: 0, 未回答率: 13 },
    { name: '部門8', 使用率: 20, 未使用率: 40, 未回答率: 40 }
  ];

  // 表用データ
  const tableData = [
    { 部門: '全体', 部門人数: 69, 回答数: 38, 回答率: '55%', LLM利用数: 28, 使用比率_回答: '74%', 使用比率_部門: '41%' },
    { 部門: '部門1', 部門人数: 2, 回答数: 0, 回答率: '0%', LLM利用数: 0, 使用比率_回答: '0%', 使用比率_部門: '0%' },
    { 部門: '部門2', 部門人数: 6, 回答数: 5, 回答率: '83%', LLM利用数: 5, 使用比率_回答: '100%', 使用比率_部門: '83%' },
    { 部門: '部門3', 部門人数: 6, 回答数: 4, 回答率: '67%', LLM利用数: 2, 使用比率_回答: '50%', 使用比率_部門: '33%' },
    { 部門: '部門4', 部門人数: 8, 回答数: 5, 回答率: '63%', LLM利用数: 5, 使用比率_回答: '100%', 使用比率_部門: '63%' },
    { 部門: '部門5', 部門人数: 25, 回答数: 12, 回答率: '48%', LLM利用数: 9, 使用比率_回答: '75%', 使用比率_部門: '36%' },
    { 部門: '部門6', 部門人数: 9, 回答数: 4, 回答率: '44%', LLM利用数: 1, 使用比率_回答: '25%', 使用比率_部門: '11%' },
    { 部門: '部門7', 部門人数: 8, 回答数: 7, 回答率: '88%', LLM利用数: 7, 使用比率_回答: '100%', 使用比率_部門: '88%' },
    { 部門: '部門8', 部門人数: 5, 回答数: 3, 回答率: '60%', LLM利用数: 1, 使用比率_回答: '33%', 使用比率_部門: '20%' }
  ];

  // サービス別利用者数データ
  const serviceUsageData = [
    { name: 'ChatGPT', users: 27 },
    { name: 'Gemini', users: 13 },
    { name: 'Felo', users: 5 },
    { name: 'Midjourney', users: 6 },
    { name: 'Claude', users: 5 },
    { name: 'GitHub Copilot', users: 4 },
    { name: 'Perplexity', users: 5 }
  ];

  // 利用目的データ
  const purposeData = [
    { name: '画像生成', count: 5 },
    { name: 'コーディング', count: 5 },
    { name: '資料作成', count: 3 },
    { name: '情報収集', count: 3 },
    { name: 'リサーチ', count: 3 },
    { name: '文章作成', count: 3 },
    { name: '調査', count: 3 },
    { name: '文書作成', count: 2 }
  ];

  // 非利用理由データ
  const nonUsageData = [
    { name: '何に使用したらいいか分からない', count: 6 },
    { name: '興味がない', count: 1 },
    { name: '不正確な情報が返ってきて使い物にならなかった', count: 1 },
    { name: '情報の正確性や信頼性に不安がある', count: 1 },
    { name: '学習する時間がない', count: 1 },
    { name: '使う必要性を感じない', count: 1 },
    { name: 'セキュリティ上の懸念がある', count: 1 }
  ];

  // 利用コンテキストデータ
  const usageContextData = [
    { name: '業務とプライベート両方', value: 20 },
    { name: '業務のみ', value: 3 },
    { name: 'プライベートのみ', value: 5 }
  ];

  // パイチャートの色
  const COLORS = [chartStyle.colors.primary, chartStyle.colors.secondary, chartStyle.colors.warning, chartStyle.colors.caution, chartStyle.colors.gray];

  // コメントスタイル
  const commentStyle = {
    backgroundColor: '#F1F5F9',
    borderLeft: `4px solid ${chartStyle.colors.primary}`,
    padding: '12px 16px',
    margin: '12px 0',
    borderRadius: '4px'
  };

  return (
    <div className="p-4" style={{ fontFamily: chartStyle.fontFamily }}>
      <h1 className="text-2xl font-bold mb-6 text-center">LLM利用状況レポート</h1>
      
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">1. 部門別回答率</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={responseRateData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis label={{ value: '回答率(%)', angle: -90, position: 'insideLeft' }} domain={[0, 100]} />
              <Tooltip />
              <Legend />
              <Bar dataKey="rate" name="回答率(%)" fill={chartStyle.colors.primary} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div style={commentStyle}>
          <h4 className="font-semibold mb-1">分析コメント</h4>
          <p>回答率には部門間で大きな差があり、特に部門7(88%)と部門2(83%)が高い一方、部門1(0%)は全く回答がありません。技術系部門（部門7）や特定のプロジェクト部門（部門2）では新技術への関心が高い傾向が見られます。全体平均(55%)を下回る部門については、LLMへの認知や関心を高める取り組みが必要かもしれません。</p>
        </div>
      </div>
      
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">2. 部門別LLM利用状況（100%積み上げ棒グラフ）</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={stackedBarData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis label={{ value: '比率(%)', angle: -90, position: 'insideLeft' }} domain={[0, 100]} ticks={[0, 20, 40, 60, 80, 100]} />
              <Tooltip />
              <Legend />
              <Bar dataKey="使用率" stackId="a" fill={chartStyle.barColors['使用率']} name="使用中" />
              <Bar dataKey="未使用率" stackId="a" fill={chartStyle.barColors['未使用率']} name="回答したが未使用" />
              <Bar dataKey="未回答率" stackId="a" fill={chartStyle.barColors['未回答率']} name="未回答" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div style={commentStyle}>
          <h4 className="font-semibold mb-1">分析コメント</h4>
          <p>利用率のパターンに着目すると、部門7と部門2では回答者のほぼ全員がLLMを活用している一方で、部門6では回答者の多くがLLMを使用していません。個人調査からは、部門6では「使用する必要性を感じない」「学習する時間がない」などの声が聞かれ、業務内容とLLM活用のマッチングが進んでいない可能性があります。部門3では回答者が半々に分かれており、利用への検討段階と考えられます。</p>
        </div>
      </div>
      
      <div className="mb-6 overflow-x-auto">
        <h3 className="text-lg font-medium mb-2">部門別の詳細データ</h3>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">部門</th>
              <th className="py-2 px-4 border-b">部門人数</th>
              <th className="py-2 px-4 border-b">回答数</th>
              <th className="py-2 px-4 border-b">回答率</th>
              <th className="py-2 px-4 border-b">LLM利用数</th>
              <th className="py-2 px-4 border-b">使用比率(回答者中)</th>
              <th className="py-2 px-4 border-b">使用比率(部門全体)</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="py-2 px-4 border-b">{row.部門}</td>
                <td className="py-2 px-4 border-b text-center">{row.部門人数}</td>
                <td className="py-2 px-4 border-b text-center">{row.回答数}</td>
                <td className="py-2 px-4 border-b text-center">{row.回答率}</td>
                <td className="py-2 px-4 border-b text-center">{row.LLM利用数}</td>
                <td className="py-2 px-4 border-b text-center">{row.使用比率_回答}</td>
                <td className="py-2 px-4 border-b text-center">{row.使用比率_部門}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={commentStyle}>
          <h4 className="font-semibold mb-1">分析コメント</h4>
          <p>全社での実質的なLLM活用率は41%で、回答者に限定すると74%と高くなります。特に部門2、部門4、部門7では回答者全員がLLMを使用しており、テクノロジー部門や関連部署での高い受容性が示されています。一方、部門6は回答者中の使用率も25%と低く、利用を促進するための具体的な事例やトレーニングが必要かもしれません。部門5は最多の25名が所属しているため、この部門の利用率向上が全社平均を大きく引き上げるポイントになるでしょう。</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">3. サービス別利用者数</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={serviceUsageData} layout="vertical"
                margin={{ top: 5, right: 30, left: 100, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis type="category" dataKey="name" />
                <Tooltip />
                <Legend />
                <Bar dataKey="users" name="利用者数" fill={chartStyle.colors.secondary} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div style={commentStyle}>
            <h4 className="font-semibold mb-1">分析コメント</h4>
            <p>ChatGPTが27名と圧倒的に多く、次いでGemini（13名）が続いています。調査データからは複数サービスを併用している利用者も多く見られます。特に技術部門（部門7）のメンバーは複数のLLMを使い分けている傾向があり、用途によって最適なツールを選択していることが伺えます。Midjourney（6名）の利用は画像生成ニーズの高まりを示しており、特に部門5のコンテンツ制作担当者に多く見られます。</p>
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">4. 使用コンテキスト</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={usageContextData}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  label={({name, value, percent}) => `${name}: ${value}名 (${(percent * 100).toFixed(0)}%)`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {usageContextData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div style={commentStyle}>
            <h4 className="font-semibold mb-1">分析コメント</h4>
            <p>LLM利用者28名中20名（71%）が業務とプライベート両方でLLMを活用しており、ツールの汎用性の高さを示しています。業務のみの利用は3名と少数で、プライベートでの経験が業務への応用につながっている可能性があります。回答者のコメントからは、個人で有料プランを契約している利用者が複数おり、業務効率化のために自己投資をしている状況が見受けられます。会社としての支援体制を整えることで、さらなる活用が促進される可能性があります。</p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">5. 主な利用目的</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={purposeData} layout="vertical"
                margin={{ top: 5, right: 30, left: 100, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis type="category" dataKey="name" />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" name="回答数" fill={chartStyle.colors.secondary} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div style={commentStyle}>
            <h4 className="font-semibold mb-1">分析コメント</h4>
            <p>利用目的は多岐にわたりますが、「画像生成」と「コーディング」が最も多く、特定の専門業務での活用が進んでいます。部門7ではコーディング支援、部門5では画像生成や文章作成、部門4では情報収集など、部門の主要業務に合わせた活用が見られます。個別回答からは、「プロンプト作成」「データ分析」「企画」「フィードバック」など、さらに細分化された活用方法も報告されており、業務に合わせたカスタマイズが進んでいることが分かります。</p>
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">6. LLMを利用しない理由</h2>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={nonUsageData} layout="vertical"
                margin={{ top: 5, right: 30, left: 120, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis type="category" dataKey="name" width={150} />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" name="回答数" fill={chartStyle.colors.warning} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div style={commentStyle}>
            <h4 className="font-semibold mb-1">分析コメント</h4>
            <p>非利用の最大の理由は「何に使用したらいいか分からない」（6名）であり、ガイドラインや活用事例の共有が有効と考えられます。「セキュリティ上の懸念」や「情報の正確性に不安」という声からは、適切な情報提供や利用ポリシーの確立が求められています。AKさんのコメントには「マッチングアプリのお問い合わせ対応に使えるか」という具体的な懸念があり、業務特性に応じた安全なLLM活用方法を共有することが重要です。「学習する時間がない」という回答に対しては、簡単なハンズオントレーニングの実施が効果的かもしれません。</p>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-3">部門トップのLLM活用姿勢と部門全体の利用率の相関</h2>
        
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border-b">部門</th>
                <th className="py-2 px-4 border-b">トップの回答状況</th>
                <th className="py-2 px-4 border-b">トップのLLM利用</th>
                <th className="py-2 px-4 border-b">部門全体LLM利用率</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50">
                <td className="py-2 px-4 border-b">部門1</td>
                <td className="py-2 px-4 border-b">未回答</td>
                <td className="py-2 px-4 border-b">不明</td>
                <td className="py-2 px-4 border-b">0%</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">部門2</td>
                <td className="py-2 px-4 border-b">TOP不在</td>
                <td className="py-2 px-4 border-b">該当なし</td>
                <td className="py-2 px-4 border-b">83%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="py-2 px-4 border-b">部門3</td>
                <td className="py-2 px-4 border-b">回答あり（U）</td>
                <td className="py-2 px-4 border-b">プライベートのみ使用</td>
                <td className="py-2 px-4 border-b">33%</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">部門4</td>
                <td className="py-2 px-4 border-b">回答あり（D）</td>
                <td className="py-2 px-4 border-b">複数サービス活用</td>
                <td className="py-2 px-4 border-b">63%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="py-2 px-4 border-b">部門5</td>
                <td className="py-2 px-4 border-b">未回答</td>
                <td className="py-2 px-4 border-b">不明</td>
                <td className="py-2 px-4 border-b">36%</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">部門6</td>
                <td className="py-2 px-4 border-b">未回答</td>
                <td className="py-2 px-4 border-b">不明</td>
                <td className="py-2 px-4 border-b">11%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="py-2 px-4 border-b">部門7</td>
                <td className="py-2 px-4 border-b">回答あり（A）</td>
                <td className="py-2 px-4 border-b">複数サービス積極活用</td>
                <td className="py-2 px-4 border-b">88%</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">部門8</td>
                <td className="py-2 px-4 border-b">未回答</td>
                <td className="py-2 px-4 border-b">不明</td>
                <td className="py-2 px-4 border-b">20%</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h3 className="text-lg font-medium mb-2">主な発見</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>リーダーシップ効果：</strong> トップが積極的にLLMを活用している部門（特に部門7・部門4）では部門全体の利用率も高い（88%・63%）</li>
          <li><strong>参加意欲の連動：</strong> トップがアンケートに回答した部門は、そうでない部門と比較して全体的にLLM利用率が高い</li>
          <li><strong>未回答の影響：</strong> トップが未回答の部門では利用率が低く、特に部門6は最も低い（11%）</li>
        </ul>
        
        <p className="mt-3">この相関からは、LLM技術の組織的な普及には経営層自身の理解と積極的な取り組みが重要な要素であることが示唆されている。トップのデジタル技術への姿勢が、部門全体の技術受容性に大きく影響しているといえる。</p>
      
        <div style={commentStyle}>
          <h4 className="font-semibold mb-1">分析コメント</h4>
          <p>部門間の差異を説明する最も顕著な要因は、部門トップの姿勢です。部門7と部門4はトップ自身がLLMを積極活用しており、部門全体の利用率も高くなっています。部門3はトップがプライベートのみで利用しており、業務での活用姿勢が明確でないため、部門全体の利用率も中程度にとどまっています。このパターンからは、リーダーの行動が部門の文化形成に大きく影響していることが分かります。他部門へのLLM普及を促進するためには、各部門のトップへのLLM活用メリットの提示と成功事例の共有が効果的と考えられます。</p>
        </div>
      </div>
      
      <div className="mt-6 mb-4">
        <h2 className="text-xl font-semibold mb-3">主な調査結果</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>全社回答率は55%、回答者のLLM利用率は74%、全社LLM利用率は41%</li>
          <li>部門7(88%)と部門2(83%)が最も部門全体に対するLLM使用率が高い</li>
          <li>部門2、部門4、部門7では回答者全員がLLMを利用している</li>
          <li>部門6は回答者中のLLM使用率が25%と最も低い</li>
          <li>ChatGPTが最も普及(27名)、次いでGemini(13名)</li>
          <li>主な利用目的は「画像生成」「コーディング」「情報収集」「リサーチ」</li>
          <li>非利用の最大理由は「何に使用したらいいか分からない」(6名)</li>
        </ul>
        
        <div style={commentStyle}>
          <h4 className="font-semibold mb-1">分析コメント</h4>
          <p>全体として、LLMの利用は比較的進んでいるものの、部門間で大きな差があります。特に技術系部門（部門7）や特定プロジェクト部門（部門2）での高い利用率は、業務内容とLLMの親和性の高さを示しています。ChatGPTの圧倒的な普及は、使いやすさと認知度の高さが要因と考えられます。非利用の主な理由からは、具体的な活用方法の提示が普及促進に重要であることが示唆されています。アンケートの回答者コメントからは「業務効率化が進んでいる」「使いこなせるようになりたい」といった前向きな意見も多く、適切な支援があれば全社的な活用が加速する可能性があります。</p>
        </div>
      </div>
      
      <div className="mt-6 mb-4">
        <h2 className="text-xl font-semibold mb-3">提言</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>LLM活用ガイドラインの策定</strong> - 特に「何に使用したらいいか分からない」という声に応える</li>
          <li><strong>利用事例・ベストプラクティスの共有</strong> - 部門2、部門7の事例を他部門へ横展開</li>
          <li><strong>教育・研修の実施</strong> - 特に部門5、部門6、部門8向けに基礎講座の提供</li>
          <li><strong>会社としての支援体制の検討</strong> - 有料プランの会社負担対象の拡大</li>
        </ol>
        
        <div style={commentStyle}>
          <h4 className="font-semibold mb-1">提言の根拠と期待効果</h4>
          <p>1. <strong>活用ガイドライン策定</strong>：アンケートから「何に使用したらいいか分からない」が最多の課題であることが判明。特に部門5・部門6では具体的な業務への落とし込み方に悩む声があります。部門・業務別の具体的なユースケースを含むガイドラインを作成することで、初心者でも取り組みやすい環境を整えられます。</p>
          <p>2. <strong>事例共有</strong>：部門7の技術チームや部門2のプロジェクトチームでの活用事例を社内で共有することで、「自分の業務ではどう使えるか」をイメージしやすくなります。特にAEさんのコメントにある「0-1や8-10は人間、2-8はAI」という考え方は、適切な活用範囲を示す良い指針になるでしょう。</p>
          <p>3. <strong>教育・研修</strong>：「学習する時間がない」という声に対して、短時間で基本を学べるハンズオントレーニングの実施が効果的です。特に所属人数の多い部門5（25名）向けの研修は、全社平均を大きく引き上げる効果が期待できます。</p>
          <p>4. <strong>支援体制</strong>：現在、個人支払いで有料プランを利用している社員が多数いることから、業務効率化のための自己投資が行われている状況です。会社として適切なLLMツールの有料プラン負担を拡大することで、さらなる活用促進と業務効率化が期待できます。</p>
        </div>
      </div>
      
      <div className="mt-6 mb-4">
        <h2 className="text-xl font-semibold mb-3">アンケート回答者の声の傾向と分析</h2>
        <div style={commentStyle}>
          <h4 className="font-semibold mb-2">回答者コメントの主な傾向</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-medium text-blue-700 mb-1">前向きな意見</h5>
              <ul className="list-disc pl-5 space-y-1">
                <li>業務効率化への期待の声が複数見られる</li>
                <li>積極的な活用意欲を示すコメントがある</li>
                <li>新しい活用方法への興味を表明する回答者が見られる</li>
                <li>コンテンツ品質向上への貢献可能性を指摘する声がある</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium text-amber-700 mb-1">懸念点・課題</h5>
              <ul className="list-disc pl-5 space-y-1">
                <li>具体的な活用方法が不明確という意見が複数ある</li>
                <li>情報の正確性への不安を表明する回答がある</li>
                <li>セキュリティ上の懸念を示す声がある</li>
                <li>仕事の価値・意味への問いかけが見られる</li>
                <li>適切な使用範囲の線引きを求める意見がある</li>
              </ul>
            </div>
          </div>
          <h4 className="font-semibold mt-4 mb-1">コメント分析</h4>
          <p>アンケートから得られたコメントを分析すると、いくつかの注目すべき傾向が見られます：</p>
          <ol className="list-decimal pl-5 space-y-2 mt-2">
            <li><strong>効率化と可能性への期待</strong>：複数の回答者がLLMによる業務効率化を実感または期待しており、特に定型業務の自動化や情報整理、文書作成などの分野での活用に関心が示されています。</li>
            <li><strong>活用基準への要望</strong>：「どこまで使って良いのか」「どのように使うべきか」という基準やガイドラインを求める声があります。特に部門5（編集部門）からは、コンテンツ制作における適切なLLM活用の線引きに関する意見が見られます。</li>
            <li><strong>将来への不安と期待の混在</strong>：業務効率化への期待と同時に、「人間の仕事の価値は何か」という根本的な問いかけや、技術の進化に対する戸惑いを表現するコメントもあります。</li>
          </ol>
          <p className="mt-2 text-gray-600 text-sm">※ 注意：これらの傾向は限られたサンプルサイズ（38名の回答者）から抽出されたものであり、全社の傾向を完全に代表するものではありません。特に回答率の低い部門については、解釈に注意が必要です。</p>
        </div>
        
        <h3 className="text-lg font-medium mt-6 mb-2">代表的なコメント（抜粋）</h3>
        <div className="space-y-4">
          <div style={{...commentStyle, borderLeft: `4px solid ${chartStyle.colors.secondary}`}}>
            <p className="italic">"すでに業務で活用していますが、想像以上に効率化が進んでいます。実務に落とし込む上での活用ガイドラインや事例共有などがあると、さらに浸透しやすいと思います。" <span className="font-semibold">- Kさん（部門5）</span></p>
          </div>
          
          <div style={{...commentStyle, borderLeft: `4px solid ${chartStyle.colors.secondary}`}}>
            <p className="italic">"広告アカウントやCSVのデータを食わせて分析楽にしたり自動化したりしたいです。" <span className="font-semibold">- Mさん（部門2・部門3）</span></p>
          </div>
          
          <div style={{...commentStyle, borderLeft: `4px solid ${chartStyle.colors.secondary}`}}>
            <p className="italic">"編集の仕事でも、かつてないほどAIが身近になっており、もはや編集の仕事の必要性を自問する毎日です。業務が簡易になる一方、例えば若手にとってどこまでAIを使っていいのか？と迷う部分も多いと思います。個人的には、0-1や8-10は人間がしっかり関わるべきで、2-8の部分でAIに活躍してもらう、など、使い方、考え方は会社や部として定めるべきかなと思っております。" <span className="font-semibold">- AEさん（部門5）</span></p>
          </div>
          
          <div style={{...commentStyle, borderLeft: `4px solid ${chartStyle.colors.secondary}`}}>
            <p className="italic">"コンテンツのクオリティを損ねることなく生産性を上げるため、積極的に活用していきたいと思っています。" <span className="font-semibold">- Lさん（部門5）</span></p>
          </div>
          
          <div style={{...commentStyle, borderLeft: `4px solid ${chartStyle.colors.secondary}`}}>
            <p className="italic">"誤った情報もあるので全てを任せられませんが、業務の補完は可能かと思いますので、業務の効率化の為、積極的に利用すべきだと思います。" <span className="font-semibold">- AIさん（部門5）</span></p>
          </div>
          
          <div style={{...commentStyle, borderLeft: `4px solid ${chartStyle.colors.secondary}`}}>
            <p className="italic">"資料作成とデータ整理への活用に興味があります。データの最新化や名寄せなども簡単にできると助かるのですが、活用の仕方がわかりません。勉強不足でごめんなさい…。" <span className="font-semibold">- Fさん（部門2）</span></p>
          </div>
          
          <div style={{...commentStyle, borderLeft: `4px solid ${chartStyle.colors.secondary}`}}>
            <p className="italic">"生成系AIに対する興味はあるので、個人的に勉強しようとしておりましたが、何よりもセキュリティが気になります。「マッチングアプリに来たお問い合わせの回答文を考えて」とかくらいだったらいいんでしょうか…？" <span className="font-semibold">- AKさん（部門3）</span></p>
          </div>
        </div>
        
        <div style={{...commentStyle, marginTop: '20px', backgroundColor: '#EFF6FF'}}>
          <h4 className="font-semibold mb-2">部門別の特徴的な声</h4>
          <div className="space-y-3">
            <div>
              <h5 className="font-medium text-blue-800">部門2（プロジェクト部門）</h5>
              <p>回答者からはデータ活用やビジネス文書作成への関心が示されており、業務での活用例が挙げられています。</p>
            </div>
            <div>
              <h5 className="font-medium text-blue-800">部門5（編集部門）</h5>
              <p>回答者の間で多様な意見が見られます。積極的に活用したい意見がある一方で、編集業務の本質や将来性に関する問いかけも示されています。</p>
            </div>
            <div>
              <h5 className="font-medium text-blue-800">部門7（技術部門）</h5>
              <p>回答者からはコーディング支援や技術的な活用に関する意見が目立ちます。複数のLLMツールの活用事例が報告されています。</p>
            </div>
            <div>
              <h5 className="font-medium text-blue-800">部門3・部門6（営業・マーケティング系）</h5>
              <p>回答者からはセキュリティや情報の正確性に関する懸念の声が聞かれます。具体的な活用方法について模索している様子が伺えます。</p>
            </div>
          </div>
          <p className="mt-3 text-gray-600 text-sm">※ 各部門の回答者数にはばらつきがあるため（特に部門1は回答者0名）、ここでの観察は限定的なサンプルに基づいています。</p>
        </div>
      </div>
      
      <div className="mt-8 mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h2 className="text-xl font-semibold mb-3 text-blue-800">今後のアクションプラン</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>5月中</strong>：各部門の優良事例収集と社内ポータルでの共有</li>
          <li><strong>6月</strong>：部門別LLM活用ガイドラインの策定と公開</li>
          <li><strong>7月</strong>：初心者向けLLM活用基礎講座の開催（各部門2名以上の参加推奨）</li>
          <li><strong>8月</strong>：有料サービスの会社負担範囲拡大の検討</li>
          <li><strong>10月</strong>：第2回LLM利用状況調査の実施</li>
        </ol>
        <p className="mt-3 text-blue-700">推進責任者：デジタルトランスフォーメーション推進室</p>
      </div>
    </div>
  );
};

export default LLMReport;