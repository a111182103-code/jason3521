import React from "react";
import { motion } from "motion/react";
import { 
  Briefcase, 
  User, 
  Code, 
  Globe, 
  Award,
  BookOpen,
  Map,
  CheckCircle2,
  Mail,
  Smartphone,
  Box,
  FileText,
  ExternalLink
} from "lucide-react";

// 簡約的區塊組件，模擬 Google 協作平台
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="py-8 border-t border-gray-100 first:border-t-0">
    <h2 className="text-2xl font-bold text-[#1a73e8] mb-6 flex items-center gap-3">
      {title}
    </h2>
    <div className="text-gray-700 leading-relaxed">
      {children}
    </div>
  </section>
);

const SkillItem = ({ label, level }: { label: string; level?: string }) => (
  <div className="flex justify-between items-center py-2 border-b border-gray-50 last:border-b-0">
    <span className="font-medium text-gray-800">{label}</span>
    {level && <span className="text-sm text-gray-500 bg-gray-100 px-2 py-0.5 rounded">{level}</span>}
  </div>
);

export default function App() {
  const [activeDocIndex, setActiveDocIndex] = React.useState(0);

  const driveDocs = [
    {
      title: "作業檔案一",
      url: "https://drive.google.com/file/d/1Gww96BuSqYGzRcOJayOwm0d-iU3AnTBJ/view",
      previewUrl: "https://drive.google.com/file/d/1Gww96BuSqYGzRcOJayOwm0d-iU3AnTBJ/preview",
      description: "這是發佈於 Google 雲端硬碟的專案報告與作業附件一。您可以在下方直接檢視完整檔案。"
    },
    {
      title: "作業檔案二",
      url: "https://drive.google.com/file/d/1xeOibub_WoNVLGGrr06CmFq0r7dckqU3/view",
      previewUrl: "https://drive.google.com/file/d/1xeOibub_WoNVLGGrr06CmFq0r7dckqU3/preview",
      description: "這是發佈於 Google 雲端硬碟的專案報告與作業附件二。您可以在下方直接檢視完整檔案。"
    },
    {
      title: "作業檔案三",
      url: "https://drive.google.com/file/d/1q1D6911-RysvFwBfgQOdPFC6cbesMIkU/view",
      previewUrl: "https://drive.google.com/file/d/1q1D6911-RysvFwBfgQOdPFC6cbesMIkU/preview",
      description: "這是發佈於 Google 雲端硬碟的專案報告與作業附件三。您可以在下方直接檢視完整檔案。"
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* 導覽列 */}
      <nav className="sticky top-0 bg-white border-b border-gray-200 z-50 px-6 py-3">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="font-bold text-xl text-gray-800">李方齊</div>
          <div className="hidden md:flex gap-6 text-sm font-medium text-gray-500">
            <a href="#about" className="hover:text-blue-600 transition-colors">關於我</a>
            <a href="#experience" className="hover:text-blue-600 transition-colors">工作經歷</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">作業專區</a>
            <a href="#3d-model" className="hover:text-blue-600 transition-colors">立體模型</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">專業技能</a>
            <a href="#bio" className="hover:text-blue-600 transition-colors">自傳</a>
          </div>
        </div>
      </nav>

      {/* 頁首 Banner */}
      <header className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1600&auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover opacity-30 grayscale"
            alt="Workspace"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">李方齊 (Jason)</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto italic">
            “對海上生活充滿熱忱，致力於成為專業且具責任感的航海人才”
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        {/* 自我介紹 */}
        <section id="about">
          <h2 className="text-3xl font-bold border-b-2 border-blue-600 inline-block mb-8">關於我</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-lg text-gray-700 space-y-4">
              <p>
                您好，我是 Jason，目前就讀於航海科。我致力於將課堂所學的航海專業知識轉化為實務能力，並對海上工作充滿熱忱與責任感。
              </p>
              <p>
                我重視團隊合作與職場紀律，期望能在具備高度挑戰性的海上環境中持續磨練，成為一名專業且穩定的船員。
              </p>
            </div>
            <div className="bg-gray-100 aspect-square rounded-2xl overflow-hidden shadow-inner flex items-center justify-center border border-gray-200">
               <img 
                 src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop" 
                 alt="李方齊" 
                 className="w-full h-full object-cover grayscale"
               />
            </div>
          </div>
        </section>

        {/* 工作經歷 */}
        <section id="experience">
          <h2 className="text-3xl font-bold border-b-2 border-blue-600 inline-block mb-8">工作經歷</h2>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-4 md:gap-12">
              <div className="md:w-1/3 text-xl font-bold text-blue-600">2024 ~ 現在</div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-2">全家坐牢</h3>
                <p className="text-gray-600">讓我體驗196是多麼美好的數字</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-12">
              <div className="md:w-1/3 text-xl font-bold text-blue-600">2025-05 ~ 2025-06</div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-2">御風輪實習 (日本 東京)</h3>
                <p className="text-gray-600">海上實習 難得的體驗 更了解在船工作在幹嘛</p>
              </div>
            </div>
          </div>
        </section>

        {/* 作業專區 - 四天極致行程規劃 */}
        <section id="projects">
          <h2 className="text-3xl font-bold border-b-2 border-blue-600 inline-block mb-8">作業專區</h2>
          
          <div className="bg-gray-50 rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm">
            <div className="bg-blue-600 text-white p-8 md:p-12">
              <div className="flex items-center gap-4 mb-4">
                <Map size={40} className="shrink-0" />
                <h3 className="text-3xl md:text-4xl font-bold">四天極致行程規劃</h3>
              </div>
              <p className="text-blue-100 text-lg italic">"一場定義極致奢華的感官之旅"</p>
            </div>

            <div className="p-8 md:p-12 space-y-12">
              {/* Day 1 */}
              <div className="relative pl-8 border-l-2 border-blue-200">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-sm"></div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Day 1：東京 · 空中殿堂與壽司之神</h4>
                <div className="space-y-4 text-gray-700">
                  <p className="font-medium bg-white p-4 rounded-xl shadow-sm border border-gray-50">
                    <span className="text-blue-600 font-bold block mb-1">下午：</span>
                    私人飛機降落後，車隊直抵 Aman Tokyo（安縵東京），您將包下飯店頂層的所有套房，將整片東京天際線據為己有。
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-50">
                      <span className="text-blue-600 font-bold block mb-1">午餐：</span>
                      在專機上享受由空中主廚現做、空運自北海道的「紅金魚子醬」配冰滴藍山咖啡。
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-50">
                      <span className="text-red-500 font-bold block mb-1">晚餐：【私人包場】</span>
                      壽司之神「數寄屋橋次郎」。小野二郎（或其傳人）將整晚只服務您一人，所有頂級食材（如一公斤百萬日圓的鮪魚大腹）皆為今日拍賣市場最強之選。
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 italic">宵夜：飯店頂層私人酒吧，由世界調酒冠軍現場為您調製 1950 年份珍稀麥卡倫特調。</p>
                </div>
              </div>

              {/* Day 2 */}
              <div className="relative pl-8 border-l-2 border-blue-200">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-sm"></div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Day 2：京都 · 皇室禁地與古寺夜宴</h4>
                <div className="space-y-4 text-gray-700">
                  <p className="font-medium bg-white p-4 rounded-xl shadow-sm border border-gray-50">
                    <span className="text-blue-600 font-bold block mb-1">上午/下午：</span>
                    搭乘私人直升機橫跨富士山，降落在京都「仁和寺」後院。進入平時不對外開放的國寶級建築，由住持親自導覽，並在江戶時代的茶室中體驗由皇室茶師進行的茶禮。
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-50">
                      <span className="text-blue-600 font-bold block mb-1">早餐：</span>
                      在安縵東京套房內享用「松露極上歐姆蛋」。
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-50">
                      <span className="text-blue-600 font-bold block mb-1">午餐：</span>
                      京都「菊乃井 本店」包廂。品嚐米其林三星懷石料理，主廚村田吉弘親自說菜。
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-50">
                      <span className="text-red-500 font-bold block mb-1">晚餐：【獨家】</span>
                      二條城私人夜宴。特許封場，安排江戶風格私人晚宴，伴隨藝伎與武士道劍術表演。
                    </div>
                  </div>
                </div>
              </div>

              {/* Day 3 */}
              <div className="relative pl-8 border-l-2 border-blue-200">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-sm"></div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Day 3：九州 · 鐵道上的移動城堡</h4>
                <div className="space-y-4 text-gray-700">
                  <p className="font-medium bg-white p-4 rounded-xl shadow-sm border border-gray-50">
                    <span className="text-blue-600 font-bold block mb-1">全天：</span>
                    包下整台 「九州七星號 (Seven Stars)」豪華臥鋪火車。包下全車 10 間套房，整輛列車只為您服務，行駛於九州最美的山海線。
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-50">
                      <span className="text-blue-600 font-bold block mb-1">早餐：</span>
                      列車上的移動晨曦餐，使用阿蘇火山地帶的稀有時令蔬菜。
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-50">
                      <span className="text-blue-600 font-bold block mb-1">午餐：</span>
                      列車內「車頭景觀餐廳」，由九州頂尖名廚現場料理「宮崎牛」牛排。
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-50">
                      <span className="text-blue-600 font-bold block mb-1">晚餐：</span>
                      停靠私人秘境車站，在星空下進行露天炭火晚宴，搭配現場大提琴與鋼琴獨奏。
                    </div>
                  </div>
                </div>
              </div>

              {/* Day 4 */}
              <div className="relative pl-8 border-l-2 border-blue-200">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-sm"></div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Day 4：東京 · 全球選物與凱旋歸航</h4>
                <div className="space-y-4 text-gray-700">
                  <p className="font-medium bg-white p-4 rounded-xl shadow-sm border border-gray-50">
                    <span className="text-blue-600 font-bold block mb-1">下午：【銀座封館購物】</span>
                    銀座頂級百貨公司為您提前一小時閉館，所有 2026 年最新款精品與稀有珠寶皆準備妥當供您挑選。
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-50">
                      <span className="text-blue-600 font-bold block mb-1">三餐亮點：</span>
                      午餐享用米其林三星「麻布 幸村」的間人蟹；下午茶提供 2026 年限定款法國皇室甜點。
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-50 flex items-center justify-center text-center">
                       <p className="text-blue-600 font-bold">帶著所有戰利品，私人專機在戰機護航下升空返航。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 雲端作業檔案 */}
          <div className="mt-12 bg-white rounded-[2rem] border border-gray-100 shadow-lg overflow-hidden">
            {/* 作業檔案選擇切換器 */}
            <div className="p-6 bg-gray-50/50 border-b border-gray-100 flex flex-wrap gap-2 items-center">
              <span className="text-sm font-semibold text-gray-500 mr-2">切換作業檔案：</span>
              <div className="flex flex-wrap gap-2">
                {driveDocs.map((doc, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveDocIndex(index)}
                    className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                      activeDocIndex === index
                        ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                        : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 hover:text-blue-600"
                    }`}
                  >
                    {doc.title}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-8 md:p-12 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <FileText className="text-blue-600" size={28} />
                  行銷與專業報告作業檔案 - {driveDocs[activeDocIndex].title}
                </h3>
                <p className="text-gray-600">
                  {driveDocs[activeDocIndex].description} 您可以在下方直接滾動與檢視完整的檔案內容，或點擊右側按鈕在新分頁開啟。
                </p>
              </div>
              <a 
                href={driveDocs[activeDocIndex].url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition shadow-sm hover:shadow-md shrink-0 gap-2"
              >
                <ExternalLink size={18} />
                在新分頁開啟檔案
              </a>
            </div>
            
            <div className="relative w-full bg-gray-100 h-[600px]">
              <iframe
                key={activeDocIndex} // Force reload of iframe when selection changes
                src={driveDocs[activeDocIndex].previewUrl}
                className="absolute inset-0 w-full h-full border-0"
                allow="autoplay"
                title={`Google Drive Document - ${driveDocs[activeDocIndex].title}`}
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>

        {/* 立體模型 */}
        <section id="3d-model">
          <h2 className="text-3xl font-bold border-b-2 border-blue-600 inline-block mb-8">立體模型</h2>
          <div className="bg-white rounded-[2rem] border border-gray-100 shadow-lg overflow-hidden">
            <div className="p-8 md:p-12 border-b border-gray-100 bg-gray-50/50 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Box className="text-blue-600" size={28} />
                  3D 數位藝術展示
                </h3>
                <p className="text-gray-600">
                  使用先進生成式 3D 技術（Tripo3D AI）建立的立體模型。您可以在下方直接旋轉、縮放與拖曳，以全方位視角進行三維觀看與探索。
                </p>
              </div>
              <a 
                href="https://studio.tripo3d.ai/3d-model/b5345719-2b38-4dd1-b077-6ee1cb4cafb2?invite_code=HF6UKF"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition shadow-sm hover:shadow-md shrink-0 gap-2"
              >
                <Globe size={18} />
                在 Tripo 平台開啟
              </a>
            </div>
            <div className="relative aspect-video w-full bg-gray-900 min-h-[450px]">
              <iframe
                src="https://studio.tripo3d.ai/3d-model/b5345719-2b38-4dd1-b077-6ee1cb4cafb2?invite_code=HF6UKF"
                className="absolute inset-0 w-full h-full border-0"
                allow="fullscreen; autoplay; vr; xr; xr-spatial-tracking"
                title="Tripo3D 3D Model"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>

        {/* 技能能力 */}
        <section id="skills" className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h2 className="text-2xl font-bold border-b-2 border-blue-600 inline-block mb-6">專業技能</h2>
            <div className="flex flex-wrap gap-2">
              {["飛行空中巴士客機"].map(s => (
                <span key={s} className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium">{s}</span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold border-b-2 border-blue-600 inline-block mb-6">電腦技能</h2>
            <div className="flex flex-wrap gap-2">
              {["Office 軟體", "電腦組裝", "用模擬飛行在電腦裡飛行"].map(s => (
                <span key={s} className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium">{s}</span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold border-b-2 border-blue-600 inline-block mb-6">語言能力</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-bold">英文</span>
                <span className="text-blue-600">TOEIC 67</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold">韓文</span>
                <span className="text-gray-600">首爾路邊的狗程度</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold">台語</span>
                <span className="text-gray-600">可以罵人的程度</span>
              </div>
            </div>
          </div>
        </section>

        {/* 證照與自傳 */}
        <section id="bio" className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-100 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2"><Award /> 專業證照</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2"><CheckCircle2 size={16} /> 基本安全訓練</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={16} /> 進階滅火</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={16} /> ARPA</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={16} /> 航行安全</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={16} /> 醫療急救</li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold border-b-2 border-blue-600 inline-block mb-8">自傳</h2>
            <div className="prose text-gray-700 max-w-none">
              <p>
                我是李方齊目前就讀航海科，透過在校的專業課程，逐漸培養出對航運產業的興趣。在學期間，學習到了航海相關知識，包含船舶操作、安全規範，也重視紀律與團隊合作，這些都是船上工作不可或缺的能力。
              </p>
              <p className="mt-4">
                我對海上工作環境充滿熱忱，並願意面對挑戰與長時間在海上的生活。未來希望能將所學應用於實務，累積航行經驗，持續精進自身專業能力，朝成為一名穩定且具責任感的船員邁進。
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-16 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="text-2xl font-bold mb-4">李方齊 (Jason)</div>
          <div className="flex justify-center gap-8 text-gray-400 mb-8">
            <span className="hover:text-white pointer-events-none">a111182103@nkust.edu.tw</span>
          </div>
          <p className="text-gray-600 text-xs tracking-widest uppercase">
            © 2026 LEE FANG-CHI • PORTFOLIO TEMPLATE
          </p>
        </div>
      </footer>
    </div>
  );
}
