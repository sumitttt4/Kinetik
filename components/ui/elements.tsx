import * as React from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

// Label component
export const Label = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn(
      "text-xs font-semibold text-[#171717] select-none uppercase tracking-wider font-sans",
      className
    )}
    {...props}
  />
));
Label.displayName = "Label";

// Input component
export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => (
    <input
      type={type}
      ref={ref}
      className={cn(
        "flex h-9 w-full rounded-md border border-[#E7E5E4] bg-[#FAF8F5]/50 px-3 py-1 text-sm shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#A8A29E] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FF6B35] focus-visible:border-[#FF6B35] disabled:cursor-not-allowed disabled:opacity-50 text-[#171717] font-sans",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";

// Textarea component
export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-[#E7E5E4] bg-[#FAF8F5]/50 px-3 py-2 text-sm shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-colors placeholder:text-[#A8A29E] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FF6B35] focus-visible:border-[#FF6B35] disabled:cursor-not-allowed disabled:opacity-50 text-[#171717] font-sans resize-y",
        className
      )}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";

// Select component
export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: { value: string; label: string }[];
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, options, ...props }, ref) => (
    <div className="relative w-full">
      <select
        ref={ref}
        className={cn(
          "flex h-9 w-full rounded-md border border-[#E7E5E4] bg-[#FAF8F5]/50 px-3 py-1 pr-8 text-sm shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FF6B35] focus-visible:border-[#FF6B35] disabled:cursor-not-allowed disabled:opacity-50 text-[#171717] font-sans appearance-none",
          className
        )}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className="bg-[#FAF8F5] text-[#171717]">
            {opt.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#78716C]">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
        </svg>
      </div>
    </div>
  )
);
Select.displayName = "Select";

// Card component
export const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border border-[#E7E5E4] bg-[#FAF8F5] shadow-[0_1px_3px_rgba(0,0,0,0.02),0_1px_2px_rgba(0,0,0,0.04)] text-card-foreground",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

// Dialog modal component
export interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function Dialog({ isOpen, onClose, title, children }: DialogProps) {
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#171717]/40 backdrop-blur-[1px]">
      <div className="fixed inset-0" onClick={onClose} />
      <div className="relative w-full max-w-xl rounded-lg border border-[#E7E5E4] bg-[#FAF8F5] shadow-xl transition-all z-10 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E7E5E4]">
          <h3 className="text-base font-semibold text-[#171717]">{title}</h3>
          <button
            onClick={onClose}
            className="rounded-md p-1.5 text-[#78716C] hover:text-[#171717] hover:bg-[#F5F5F4] transition-colors"
          >
            <X className="h-4.5 w-4.5" />
          </button>
        </div>
        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {children}
        </div>
      </div>
    </div>
  );
}
