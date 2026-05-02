import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import posterImg from "@/assets/images/recruit-poster-2026.png";

export function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hideUntil = localStorage.getItem("hideRecruitPopupUntil");
    
    if (hideUntil) {
      const hideUntilDate = new Date(parseInt(hideUntil, 10));
      if (new Date() < hideUntilDate) {
        return; 
      }
    }
    
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const closePopup = (hideToday: boolean) => {
    if (hideToday) {
      const tomorrow = new Date();
      tomorrow.setHours(24, 0, 0, 0);
      localStorage.setItem("hideRecruitPopupUntil", tomorrow.getTime().toString());
    }
    setIsOpen(false);
  };

  const handleScrollToJoin = () => {
    closePopup(false);
    
    // 팝업이 닫히는 애니메이션 시간을 고려해 약간의 지연 후 스크롤 이동
    setTimeout(() => {
      const posterSection = document.getElementById("recruit-poster");
      if (posterSection) {
        // 상단 네비게이션 바에 가려지지 않도록 화면 중앙(center)에 포스터가 오도록 스크롤
        posterSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        window.location.hash = "join";
      }
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300">
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm" 
        onClick={() => closePopup(false)}
      />
      
      <div className="relative w-full max-w-[600px] max-h-[90vh] flex flex-col bg-card border border-white/10 rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-2 right-2 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full h-8 w-8"
          onClick={() => closePopup(false)}
        >
          <X className="h-5 w-5" />
        </Button>

        <div className="overflow-y-auto flex-grow bg-white relative">
          <img 
            src={posterImg} 
            alt="2026년 석사 및 학부연구생 모집 포스터" 
            className="w-full h-auto object-contain block"
          />
          {/* 상단 90%: 클릭 시 하단 모집 섹션으로 이동 */}
          <a 
            href="#join" 
            onClick={(e) => {
              e.preventDefault();
              handleScrollToJoin();
            }}
            className="absolute top-0 left-0 w-full h-[90%] z-10 cursor-pointer"
            aria-label="모집 안내 자세히 보기"
            title="클릭하여 모집 안내 자세히 보기"
          />
          
          {/* 하단 10%: 클릭 시 이메일 보내기 (스팸 방지 적용) */}
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              const user = "chshin";
              const domain = "inu.ac.kr";
              window.location.href = `mailto:${user}@${domain}`;
            }}
            className="absolute bottom-0 left-0 w-full h-[10%] z-10 cursor-pointer"
            aria-label="이메일로 바로 지원하기"
            title="클릭하여 이메일 보내기 (chshin@inu.ac.kr)"
          />
        </div>

        <div className="flex items-center justify-between p-4 bg-card border-t border-white/5">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="hide-today" 
              className="border-white/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
              onCheckedChange={(checked) => {
                if (checked === true) {
                  closePopup(true);
                }
              }}
            />
            <label 
              htmlFor="hide-today" 
              className="text-sm font-medium text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
            >
              오늘 하루 이 창을 열지 않음
            </label>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => closePopup(false)}
            className="border-white/10 hover:bg-white/5"
          >
            닫기
          </Button>
        </div>
      </div>
    </div>
  );
}
